import Image from "next/image";
import React from "react";

export default function Introductions({
  text,
  title1,
  title2,
  title3,
  para,
  image,
  isReverse = false,
}) {
  return (
    <>
      <section
        className={`flex flex-col lg:flex-row  justify-between items-center w-full lg:w-4xl max-w-7xl mx-auto px-4 py-12 md:py-24 gap-8 md:gap-12 lg:gap-16 ${
          isReverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <div className="w-full md:w-[50%] flex flex-col items-start text-start">
          {/* Badge indicator */}
          <span className="inline-block py-1.5 px-4 bg-[#b7f3f583] rounded-[38px] text-black font-medium text-sm mb-4">
            {text}
          </span>

          {/* Dynamic Responsive Heading */}
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-[40px] lg:text-[48px] leading-[1.2] md:leading-14 pb-5 text-[#0D0D0D]">
            <span className="bg-[linear-gradient(to_right,#E117FC,#955AF2)] bg-clip-text text-transparent">
              {title1}
            </span>{" "}
            {title2}{" "}
            <span className="bg-[linear-gradient(to_right,#E117FC,#955AF2)] bg-clip-text text-transparent">
              {title3}
            </span>
          </h1>

          {/* Responsive Paragraph Wrapper */}
          <p className="font-normal text-base sm:text-[18px] text-gray-700 md:text-justify max-w-xl leading-relaxed">
            {para}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-center items-center mt-6 md:mt-0">
          <div className="w-full max-w-[320px] sm:max-w-100 md:max-w-full">
            <Image
              src={image}
              alt="intro image"
              width={450}
              height={450}
              priority
              className=" h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
