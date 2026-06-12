import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <>
      <section className=" w-full mb-24 ">
        <div className=" flex gap-8 justify-center ms-auto me-auto h-131.25 bg-linear-to-r from-[#d0f9fd] via-[#fdfdfd] to-[#f0d3f2] w-7xl rounded-3xl">
          <div className="p-9  w-[50%] h-102  ">
            <h1 className="font-semibold text-[54px] leading-[120%] mb-3">
              Start Your <span className="text-[#047AF3]">Journey</span> Today!
            </h1>
            <h2 className="font-semibold text-[25px] -space-x-4 leading-[120%] py-3">
              <span className="text-[#047AF3]">Limited</span>-Time Early Bird
              Offer!
            </h2>
            <p className="font-medium text-lg pb-3">
              Be among the first 50 innovation seekers to register and claim
              your{" "}
              <span className="bg-[linear-gradient(to_right,#E117FC,#955AF2)] bg-clip-text text-transparent">
                FREE 50 USDT Bonus!
              </span>
            </p>
            <p className="font-semibold text-[16px]">
              Secure your spot now—exclusive{" "}
              <span className="text-[#047AF3]">rewards</span> await!
            </p>
            <div className="bg-[#fcfcfc] shadow p-0 rounded-lg my-1.5 flex justify-between">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email to claim your bonus "
                className="w-[80%] p-5"
              />
              <Image
                src={"./icons/Purple bird send logo 1.svg"}
                alt="birds icons buttons"
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </div>
            <p>Hurry— These bonuses are disappearing fast!</p>
          </div>
          <div className=" w-[50%] relative ">
            <Image
              src={"/img/mobiles-v1 1.png"}
              alt="banner image "
              width={550}
              height={250}
              className="absolute bottom-0 right-14"
            />
          </div>
        </div>
      </section>
    </>
  );
}
