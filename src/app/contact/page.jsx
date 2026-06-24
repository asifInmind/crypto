"use client";
import Contactinfo from "@/app/components/Contactinfo";
import FAQs from "@/app/components/FAQs";
import { useState } from "react";

export default function Page() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", input);
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
        {/* Responsive Heading */}
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] pb-5 text-gray-900 leading-tight">
          Contact <span className="text-[#2CBAE3]">us</span>
        </h1>

        <section className="w-full pb-16 md:pb-24">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-4xl h-auto rounded-lg p-5 sm:p-8 md:p-10 bg-white mx-auto shadow-md flex flex-col gap-5"
          >
            {/* First Name & Last Name Grid */}
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
                />
              </div>
            </div>

            {/* Email & Phone Grid */}
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
                />
              </div>
            </div>

            {/* Objective Field */}
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
              />
            </div>

            {/* Summary Field */}
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
              ></textarea>
            </div>

            {/* Action Button */}
            <div className="w-full flex justify-center md:justify-start">
              <button
                type="submit"
                className="w-full sm:w-32.5 z-11 h-12 cursor-pointer rounded-lg bg-linear-to-r from-[#E117FC] via-[#955AF2] to-[#2CBAE3] text-white font-semibold text-[16px] capitalize mt-2 shadow-xs hover:opacity-95 active:scale-98 transition-all"
              >
                submit
              </button>
            </div>
          </form>
        </section>

        {/* Bottom Fade Masking Overlay */}
        <div className="w-full z-10 h-24 sm:h-35 bg-linear-to-t from-[#ffffff] via-[#ffffff]/50 to-[#ffffff]/0 absolute bottom-0 pointer-events-none"></div>
      </section>

      <Contactinfo />
      <FAQs />
    </>
  );
}
