import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, phone, title, summary } = body;

  if (!firstName || !email || !summary) {
    return NextResponse.json(
      { error: "Required fields are missing." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Contact: ${title || "No Subject"}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #eee"><b>First Name</b></td><td style="padding:8px;border:1px solid #eee">${firstName}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee"><b>Last Name</b></td><td style="padding:8px;border:1px solid #eee">${lastName}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee"><b>Email</b></td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee"><b>Phone</b></td><td style="padding:8px;border:1px solid #eee">${phone || "—"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee"><b>Objective</b></td><td style="padding:8px;border:1px solid #eee">${title || "—"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee"><b>Summary</b></td><td style="padding:8px;border:1px solid #eee">${summary}</td></tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}