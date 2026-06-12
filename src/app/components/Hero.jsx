import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <main
        className="flex justify-center  flex-col items-center w-full bg-cover bg-center relative"
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
        <h1 className="font-bold text-[3.375rem] mt-28 text-[#0D0D0D] text-center  space-x-1 leading-[120%] pt-9">
          CRYPTO <span className="text-[#039FF1]"> MADE</span> SIMPLE{" "}
          <span className="text-[#039FF1]"> !!</span>
        </h1>
        <div className="flex  ms-auto me-auto flex-wrap gap-4 pt-10">
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
        <div className="pt-10">
          <Image
            src={"/img/Picture Home.png"}
            alt="hero images "
            priority
            className="object-cover"
            width={400}
            height={138}
          />
        </div>
        <div className="w-full h-35 bg-linear-to-t from-[#ffffff] via-[#ffffff]/50 to-[#ffffff]/0 absolute bottom-0"></div>
      </main>
    </>
  );
}
