import Image from "next/image";
import React from "react";
import Link from "next/link";
import Banner from "./Banner";

export default function Footer() {
  return (
    <>
      <Banner />
      <section className="w-full bg-white px-4 pt-12 pb-8 relative border-t border-gray-100">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6 pb-12">
          {/* Brand/Logo Column */}
          <div className="w-full md:max-w-xs flex flex-col items-start">
            <Image
              src="/icons/Round CSC logo transparant.svg" // FIXED: Cleaned root dot-slash syntax
              alt="website logo"
              width={50}
              height={50}
              priority
              className="object-contain"
            />
            <p className="font-normal text-base text-gray-600 mt-4 leading-relaxed">
              Democratizing access to high-growth economic opportunities for
              everyone since 2018.
            </p>
          </div>

          {/* Navigation Links Columns */}
          <div className="flex flex-wrap sm:flex-nowrap gap-12 sm:gap-16 md:gap-24 lg:gap-32 w-full md:w-auto">
            {/* Column 1 */}
            <ul className="flex flex-col gap-2 min-w-[140px]">
              <li className="font-semibold text-base text-gray-900 mb-2">
                CSC base IBC
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-normal text-base text-gray-600 hover:text-[#047AF3] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-normal text-base text-gray-600 hover:text-[#047AF3] transition-colors"
                >
                  Home
                </Link>
              </li>
            </ul>

            {/* Column 2 */}
            <ul className="flex flex-col gap-2 min-w-[140px]">
              <li className="font-semibold text-base text-gray-900 mb-2">
                Download App
              </li>
              <li>
                <Link
                  href="/"
                  className="font-normal text-base text-gray-600 hover:text-[#047AF3] transition-colors"
                >
                  Android App
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-normal text-base text-gray-600 hover:text-[#047AF3] transition-colors"
                >
                  iOS App
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Copyright Notice */}
        <div className="w-full max-w-7xl mx-auto border-t border-gray-100 pt-6 text-center md:text-left">
          <p className="text-gray-400 font-normal text-sm text-center">
            Copyright © 2026 CSC base
          </p>
        </div>
      </section>
    </>
  );
}
