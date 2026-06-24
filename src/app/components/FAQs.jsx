import React from "react";
import FAQSection from "@/app/components/FAQSection";

export default function FAQs() {
  const faqs = [
    {
      id: 1,
      question: "What is CSC base?",
      answer:
        "CSC base is a community of like-minded individuals who are passionate about building wealth through stablecoin investments. We empower our members to live their lives on their own terms, free from financial constraints.",
    },
    {
      id: 2,
      question: "What is CSC base?",
      answer:
        "CSC base is a community of like-minded individuals who are passionate about building wealth through stablecoin investments. We empower our members to live their lives on their own terms, free from financial constraints.",
    },
    {
      id: 3,
      question: "What is CSC base?",
      answer:
        "CSC base is a community of like-minded individuals who are passionate about building wealth through stablecoin investments. We empower our members to live their lives on their own terms, free from financial constraints.",
    },
    {
      id: 4,
      question: "What is CSC base?",
      answer:
        "CSC base is a community of like-minded individuals who are passionate about building wealth through stablecoin investments. We empower our members to live their lives on their own terms, free from financial constraints.",
    },
    {
      id: 5,
      question: "What is CSC base?",
      answer:
        "CSC base is a community of like-minded individuals who are passionate about building wealth through stablecoin investments. We empower our members to live their lives on their own terms, free from financial constraints.",
    },
    {
      id: 6,
      question: "What is CSC base?",
      answer:
        "CSC base is a community of like-minded individuals who are passionate about building wealth through stablecoin investments. We empower our members to live their lives on their own terms, free from financial constraints.",
    },
    {
      id: 7,
      question: "What is CSC base?",
      answer:
        "CSC base is a community of like-minded individuals who are passionate about building wealth through stablecoin investments. We empower our members to live their lives on their own terms, free from financial constraints.",
    },
  ];

  return (
    <>
      <section className="w-full max-w-7xl mx-auto pb-16 sm:pb-20 md:pb-25 px-4 sm:px-6 md:px-8">
        {/* Header Title Section */}
        <section className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <span className="inline-block text-sm sm:text-[16px] font-medium rounded-[38px] py-1.5 px-4 bg-linear-to-r from-[#01E5EE] to-[#047AF3] text-white">
            FAQ’s
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[48px] font-semibold leading-tight py-5 md:py-8">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E117FC] via-[#955AF2] to-[#2CBAE3]">
              Frequently
            </span>{" "}
            Asked Question’s
          </h1>
          <p className="font-normal text-base sm:text-[18px] text-gray-600 max-w-2xl mx-auto">
            Explore the most asked questions by our users. Maybe you’ll get your
            answers from there.
          </p>
        </section>

        {/* Mapped FAQ Sections List Container */}
        <section className="w-full max-w-4xl mx-auto flex flex-col gap-1">
          {faqs.map((faq) => (
            <FAQSection key={faq.id} faqs={faq} /> // FIXED: Added unique item key parameter
          ))}
        </section>
      </section>
    </>
  );
}
