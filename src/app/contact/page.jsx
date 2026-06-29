"use client";
import Contactinfo from "@/app/components/Contactinfo";
import FAQs from "@/app/components/FAQs";
import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      if (res.ok) {
        setStatus("success");
        setInput({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          title: "",
          summary: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="text-center pt-24 sm:pt-32 md:pt-40 lg:pt-44 xl:pt-48 min-h-screen w-full bg-cover bg-center relative px-4"
        style={{
          backgroundImage: `
          radial-gradient(circle, #0169FF1F 100%, #ffffff 10%), 
          url('/img/Vector.png'),
          url('/img/Vector.png')
        `,
          backgroundPosition: "center, left center, right center",
          backgroundSize: "cover, contain, contain",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        }}
      >
        <h1 className="font-semibold mt-5 md:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-[60px] pb-5 text-gray-900 leading-tight">
          Contact <span className="text-[#2CBAE3]">us</span>
        </h1>

        <section className="w-full pb-16 md:pb-24">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-6xl h-auto rounded-lg p-5 sm:p-8 md:p-10 bg-white mx-auto shadow-md flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full flex flex-col">
                <label
                  htmlFor="firstName"
                  className="block text-start pb-2 font-semibold text-sm sm:text-[16px] text-gray-800"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={input.firstName}
                  className="border-2 border-[#EEEEEE] p-3 w-full h-12 rounded-md outline-hidden text-gray-800 text-sm sm:text-base focus:border-[#2CBAE3] transition-colors"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor="lastName"
                  className="block text-start pb-2 font-semibold text-sm sm:text-[16px] text-gray-800"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={input.lastName}
                  className="border-2 border-[#EEEEEE] p-3 w-full h-12 rounded-md outline-hidden text-gray-800 text-sm sm:text-base focus:border-[#2CBAE3] transition-colors"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full flex flex-col">
                <label
                  htmlFor="email"
                  className="block text-start pb-2 font-semibold text-sm sm:text-[16px] text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={input.email}
                  className="border-2 border-[#EEEEEE] p-3 w-full h-12 rounded-md outline-hidden text-gray-800 text-sm sm:text-base focus:border-[#2CBAE3] transition-colors"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor="phone"
                  className="block text-start pb-2 font-semibold text-sm sm:text-[16px] text-gray-800"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={input.phone}
                  className="border-2 border-[#EEEEEE] p-3 w-full h-12 rounded-md outline-hidden text-gray-800 text-sm sm:text-base focus:border-[#2CBAE3] transition-colors"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="w-full flex flex-col">
              <label
                htmlFor="title"
                className="block text-start pb-2 font-semibold text-sm sm:text-[16px] text-gray-800"
              >
                Objective
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={input.title}
                className="border-2 border-[#EEEEEE] p-3 w-full h-12 rounded-md outline-hidden text-gray-800 text-sm sm:text-base focus:border-[#2CBAE3] transition-colors"
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full flex flex-col">
              <label
                htmlFor="summary"
                className="block text-start pb-2 font-semibold text-sm sm:text-[16px] text-gray-800"
              >
                Summary
              </label>
              <textarea
                name="summary"
                id="summary"
                value={input.summary}
                className="w-full h-36 sm:h-46 rounded-md border-2 border-[#EEEEEE] p-3 outline-hidden text-gray-800 text-sm sm:text-base resize-none focus:border-[#2CBAE3] transition-colors"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
              {status && status !== "idle" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-fade-in">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-2xl max-w-sm w-full border border-slate-100 dark:border-slate-800 text-center scale-95 transition-all">
                    {status === "success" && (
                      <div>
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          Success!
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">
                          Message sent successfully!
                        </p>
                      </div>
                    )}

                    {status === "error" && (
                      <div>
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600 mb-4">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          Error
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">
                          Something went wrong. Please try again.
                        </p>
                      </div>
                    )}

                    <button
                      onClick={() => setStatus("idle")} // Replace with your state reset function
                      className="mt-5 w-full inline-flex justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-hidden transition-all cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              <div className="w-full flex justify-center md:justify-start">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full block mx-auto sm:w-32.5 z-11 h-12 cursor-pointer rounded-lg bg-linear-to-r from-[#E117FC] via-[#955AF2] to-[#2CBAE3] text-white font-semibold text-[16px] capitalize mt-2 shadow-xs hover:opacity-95 active:scale-98 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </section>

        <div className="w-full  mx-auto z-10 h-24 sm:h-35 bg-linear-to-t from-[#ffffff] via-[#ffffff]/50 to-[#ffffff]/0 absolute bottom-0 right-0 left-0 pointer-events-none"></div>
      </section>

      <Contactinfo />
      <FAQs />
    </>
  );
}
