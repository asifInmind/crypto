import React from "react";

export default function page() {
  return (
    <>
      <section
        className="text-center pt-43 h-152 items-center w-full bg-cover bg-center relative"
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
        <h1 className="font-semibold text-[60px] ">
          Contact <span className="text-[#2CBAE3]">us</span>
        </h1>
      </section>
    </>
  );
}
