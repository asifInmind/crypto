import React from "react";

export default function Button({ content, height, background, width }) {
  return (
    <>
      <button
        style={{
          width: width,
          height: height,
          background: background,
        }}
        className={` rounded-lg text-[16px] font-semibold h-13 text-[#FFFFFF] flex items-center justify-center cursor-pointer transition-transform active:scale-95`}
      >
        {content}
      </button>
    </>
  );
}
