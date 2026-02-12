import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl px-8 py-6 flex items-center relative">
        {/* Logo - Left */}
        <div className="flex-1">
          <Link href="/home" className="inline-flex items-center">
            <Image
              src="/travel_logo.png"
              alt="MyApp Logo"
              width={120}
              height={32}
              priority
              className=""
            />
          </Link>
        </div>

        {/* Nav - Center */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-10 text-sm font-medium text-white">
            <Link href="/home" className="nav-underline font-bold">
                Home
            </Link>
            <Link href="/about" className="nav-underline font-bold">
                About
            </Link>
            <Link href="/services" className="nav-underline font-bold">
                Services
            </Link>
            <Link href="/contact" className="nav-underline font-bold">
                Contact
            </Link>
        </nav>

        {/* CTA - Right */}
        <div className="flex-1 flex justify-end">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-md bg-[#DF6951] text-white text-sm font-semibold hover:bg-gray-200 transition"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
