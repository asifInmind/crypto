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
        className={`flex flex-col md:flex-row justify-center  items-center h-175 w-266 ms-auto me-auto ${
          isReverse ? "md:flex-row-reverse gap-12" : ""
        }`}
      >
        <div className=" w-full ms-auto me-auto md:w-[50%]">
          <span className="w-25.4 h-7 py-2 px-3 bg-[#b7f3f583] rounded-[38px] text-black">
            {text}
          </span>
          <h1 className="font-semibold text-[48px] leading-14 py-6">
            <span className="bg-[linear-gradient(to_right,#E117FC,#955AF2)] bg-clip-text text-transparent">
              {title1}
            </span>

            {title2}
            <span className="bg-[linear-gradient(to_right,#E117FC,#955AF2)] bg-clip-text text-transparent">
              {" "}
              {title3}
            </span>
          </h1>
          <p className="font-normal text-[18px] w-125 text-justify">{para}</p>
        </div>
        <div className="w-full ms-auto me-auto md:w-[50%] flex justify-center items-center">
          <Image src={image} alt="intro image" />
        </div>
      </section>
    </>
  );
}
