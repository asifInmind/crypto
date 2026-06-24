import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <main
        className="flex justify-center flex-col items-center w-full bg-cover bg-center relative min-h-screen px-4 overflow-hidden"
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
        {/* Responsive Heading */}
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.25rem] 2xl:text-[3.375rem] text-[#0D0D0D] text-center leading-[120%] pt-20 sm:pt-28 md:pt-36 lg:pt-40 xl:pt-44 max-w-5xl tracking-wide">
          CRYPTO <span className="text-[#039FF1]"> MADE</span> SIMPLE
          <span className="text-[#039FF1]"> !!</span>
        </h1>

        {/* Responsive Button Grid/Flex */}
        <div className="flex justify-center items-center flex-wrap gap-3 sm:gap-4 pt-6 sm:pt-8 md:pt-10 max-w-xl mx-auto">
          <Button
            content={"Early Bird"}
            width={"120px"}
            background={"linear-gradient(to right, #E117FC, #955AF2, #2CBAE3)"}
          />
          <Button content={"Vision"} width={"96px"} background={"#8537B6"} />
          <Button
            content={"Difference"}
            width={"128px"}
            background={"#9F1DA2"}
          />
          <Button content={"Video"} width={"93px"} background={"#8537B6"} />
        </div>

        {/* Responsive Image Container */}
        <div className="pt-8 sm:pt-10 pb-24 md:pb-32 w-full flex justify-center z-10">
          <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]">
            <Image
              src={"/img/Picture Home.png"}
              alt="hero images"
              priority
              layout="responsive"
              width={400}
              height={138}
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Fade Overlay */}
        <div className="w-full h-24 sm:h-35 bg-linear-to-t from-[#ffffff] via-[#ffffff]/50 to-[#ffffff]/0 absolute bottom-0 pointer-events-none"></div>
      </main>
    </>
  );
}
