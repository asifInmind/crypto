import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const navLinks = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Contact", path: "/contact" },
  ];
  return (
    <>
      <header className=" bg-[#ffffff] flex justify-between items-center absolute top-5.75 left-1/2 -translate-x-1/2 w-[98%] max-w-7xl z-50 h-21 px-6 py-6 bg-rgba(255, 255, 255, 0.9) rounded-lg shadow-sm">
        <div className="w-[20%]">
          <Image
            src="/icons/Round CSC logo transparant.svg"
            alt="website logo"
            title="logo"
            width={80}
            height={80}
          />
        </div>
        <nav className="flex gap-14">
          {navLinks.map((navItems) => (
            <ul key={navItems.id}>
              <li>
                <Link
                  href={navItems.path}
                  className="text-[16px] font-medium hover:text-[#017EEB]"
                >
                  {navItems.text}
                </Link>
              </li>
            </ul>
          ))}
        </nav>
      </header>
    </>
  );
}
