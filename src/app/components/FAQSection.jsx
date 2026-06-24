"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection({ faqs }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F5F5F5] w-full max-w-7xl mx-auto my-2.5 h-auto rounded-xl p-4 sm:p-5 border border-[#F5F5F5] transition-colors duration-200">
      {/* Clickable Heading Wrapper */}
      <div
        className="flex justify-between items-center cursor-pointer select-none gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Responsive Heading Font Sizing */}
        <h3 className="font-semibold text-base sm:text-lg md:text-[20px] text-gray-900 leading-snug">
          {faqs.question}
        </h3>

        {/* Dynamic Interactive Icon Container */}
        <div className="shrink-0">
          <button
            type="button"
            className={`w-7 h-7 cursor-pointer rounded-full bg-[#03A0F1] flex justify-center items-center text-[22px] text-white font-bold transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            aria-label={isOpen ? "Close FAQ" : "Open FAQ"}
          >
            {isOpen ? "−" : "+"}
          </button>
        </div>
      </div>

      {/* Frame Motion Smooth Heights Transitions */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-200/40 mt-3">
              {/* Responsive Text Font Sizing */}
              <p className="font-normal text-sm sm:text-base md:text-[18px] text-gray-700 leading-relaxed">
                {faqs.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
