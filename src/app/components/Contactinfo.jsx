import Image from "next/image";
import React from "react";

export default function Contactinfo() {
  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Header Section */}
        <section className="text-center flex flex-col items-center">
          <span className="inline-block text-sm sm:text-[16px] font-medium rounded-[38px] py-1.5 px-4 bg-linear-to-r from-[#01E5EE] to-[#047AF3] text-white">
            Contact Info
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[48px] font-semibold leading-tight py-5 md:py-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E117FC] via-[#955AF2] to-[#2CBAE3]">
              Keep
            </span>{" "}
            In Touch
          </h1>
          <p className="font-normal text-base sm:text-[18px] text-gray-600 max-w-md mx-auto">
            Reach out to our customer support if you are facing any problem!
          </p>
        </section>

        {/* Info Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-12 w-full">
          {/* Phone Card */}
          <div className="w-full h-auto min-h-[180px] sm:min-h-[210px] bg-[#F5F5F580] border border-gray-100/50 flex justify-center items-center flex-col rounded-xl p-6 gap-5 md:gap-6 hover:shadow-xs transition-shadow">
            <Image
              src="/icons/phone.svg"
              alt="contact phone icon"
              width={50}
              height={50}
              priority
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
            />
            <span className="font-medium text-lg sm:text-xl lg:text-[22px] text-gray-800 break-all text-center">
              +41 22 533 0191
            </span>
          </div>

          {/* Email Card */}
          <div className="w-full h-auto min-h-[180px] sm:min-h-[210px] bg-[#F5F5F580] border border-gray-100/50 flex justify-center items-center flex-col rounded-xl p-6 gap-5 md:gap-6 hover:shadow-xs transition-shadow">
            <Image
              src="/icons/email.svg"
              alt="contact email icon"
              width={50}
              height={50}
              priority
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
            />
            <span className="font-medium text-lg sm:text-xl lg:text-[22px] text-gray-800 break-all text-center">
              info@cscbase.app
            </span>
          </div>

          {/* Telegram Card */}
          <div className="w-full h-auto min-h-[180px] sm:min-h-[210px] bg-[#F5F5F580] border border-gray-100/50 flex justify-center items-center flex-col rounded-xl p-6 gap-5 md:gap-6 hover:shadow-xs transition-shadow">
            <Image
              src="/icons/telegram.svg"
              alt="contact telegram icon"
              width={50}
              height={50}
              priority
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
            />
            <span className="font-medium text-lg sm:text-xl lg:text-[22px] text-gray-800 break-all text-center">
              @CSCbase
            </span>
          </div>
        </section>
      </section>
    </>
  );
}
