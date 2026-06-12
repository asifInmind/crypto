import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <section className="w-full h-78  relative">
      <div className="w-[92%] flex ms-auto me-auto  justify-between items-center">
        <div className="w-90]">
          <Image
            src={"./icons/Round CSC logo transparant.svg"}
            alt="website logo"
            width={50}
            height={50}
          />
          <p className="font-normal text-[16px] w-95 py-3">
            Democratizing access to high-growth economic opportunities for
            everyone since 2018.
          </p>
        </div>
        <div className="flex gap-40 ">
          <ul>
            <li className="font-semibold text-[16px]">CSC base IBC</li>
            <li className="py-3">
              <Link
                href={"/contact"}
                className="font-normal text-[16px] hover:text-[#047AF3] "
              >
                Contact
              </Link>
            </li>
            <li className="py-3">
              <Link
                href={"/"}
                className="font-normal text-[16px] hover:text-[#047AF3] "
              >
                Home
              </Link>
            </li>
          </ul>
          <ul>
            <li className="font-semibold text-[16px]">Download App</li>
            <li className="py-3">
              <Link
                href={"/"}
                className="font-normal text-[16px] hover:text-[#047AF3] "
              >
                Android App
              </Link>
            </li>
            <li className="py-3">
              <Link
                href={"/"}
                className="font-normal text-[16px] hover:text-[#047AF3] "
              >
                IOS App
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center absolute right-0 left-0 bottom-7 ">
        <p className="text-[#0D0D0D] font-normal text-[16px]">
          Copyright ©️ 2025 CSC base
        </p>
      </div>
    </section>
  );
}
