import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <>
      <section className="w-full px-4 mb-16 md:mb-24">
        {/* Main Banner Card */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center max-w-7xl mx-auto h-auto min-h-125 bg-linear-to-r from-[#d0f9fd] via-[#fdfdfd] to-[#f0d3f2] rounded-3xl p-6 sm:p-10 lg:p-0 overflow-hidden">
          {/* Left Content Column */}
          <div className="w-full lg:w-[50%] lg:pl-12 xl:pl-16 flex flex-col justify-center">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] leading-[120%] mb-3 text-[#0D0D0D]">
              Start Your <span className="text-[#047AF3]">Journey</span> Today!
            </h1>

            <h2 className="font-semibold text-xl sm:text-2xl lg:text-[25px] leading-[120%] py-2 text-gray-900">
              <span className="text-[#047AF3]">Limited</span>-Time Early Bird
              Offer!
            </h2>

            <p className="font-medium text-base sm:text-lg pb-2 text-gray-700">
              Be among the first 50 innovation seekers to register and claim
              your{" "}
              <span className="bg-[linear-gradient(to_right,#E117FC,#955AF2)] bg-clip-text text-transparent font-bold">
                FREE 50 USDT Bonus!
              </span>
            </p>

            <p className="font-semibold text-sm sm:text-[16px] text-gray-800 pb-5">
              Secure your spot now—exclusive{" "}
              <span className="text-[#047AF3]">rewards</span> await!
            </p>

            {/* Email Input Field Row */}
            <div className="bg-[#fcfcfc] shadow-xs p-1 rounded-xl flex items-center justify-between w-full max-w-md border border-gray-100">
              <input
                type="email"
                placeholder="Enter your email to claim your bonus"
                className="w-full p-3 sm:p-4 text-sm sm:text-base outline-hidden bg-transparent text-gray-800 placeholder-gray-400"
              />
              <div className="flex-shrink-0 p-1">
                <Image
                  src="/icons/Purple bird send logo 1.svg"
                  alt="birds icons buttons"
                  width={44}
                  height={44}
                  className="cursor-pointer hover:scale-105 transition-transform w-10 h-10 sm:w-11 sm:h-11"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 mt-4 font-medium">
              Hurry— These bonuses are disappearing fast!
            </p>
          </div>

          {/* Right Image Column */}
          {/* Right Image Column */}
          <div className="w-full h-auto md:w-[90%] md:mx-auto relative lg:h-125">
            <Image
              src={"/img/mobiles-v1 1.png"}
              alt="banner image "
              width={550}
              height={250}
              className="relative mx-auto mt-6 lg:mt-0 lg:absolute lg:bottom-0 lg:right-6 xl:right-14"
            />
          </div>
        </div>
      </section>
    </>
  );
}
