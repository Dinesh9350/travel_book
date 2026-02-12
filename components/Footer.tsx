import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="relative border-gray-300 bg-white">
      {/* Background Image (Right Side) */}
      <div className="absolute right-0 top-0 h-full w-1/3 hidden md:block">
        <Image
          src="/Footer_img.png"
          alt="Footer Background"
          fill
          className="object-contain object-right"
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-wrap gap-12 justify-between">
          {/* 1st Column */}
          <div className="max-w-xs">
            <Image
              src="/travel_logo_black.png"
              alt="Logo"
              width={140}
              height={40}
            />
            <p className="text-sm text-gray-600 mt-2">
              Travel helps companies manage payments easily.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <Image src="/social1.png" alt="Facebook" width={20} height={20} className="cursor-pointer" />
              <Image src="/social2.png" alt="Twitter" width={20} height={20} className="cursor-pointer" />
              <Image src="/social3.png" alt="Instagram" width={20} height={20} className="cursor-pointer" />
              <Image src="/social4.png" alt="LinkedIn" width={20} height={20} className="cursor-pointer" />
            </div>
          </div>

          {/* 2nd Column */}
          <div>
            <h4 className="font-bold text-[#181E4B] mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Pricing</Link></li>
            </ul>
          </div>

          {/* 3rd Column */}
          <div>
            <h4 className="font-bold text-[#181E4B] mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Rishikesh</li>
              <li>Haridwar</li>
              <li>Tungnath</li>
              <li>Surkanda Devi</li>
            </ul>
          </div>

          {/* 4th Column */}
          <div className="max-w-sm">
            <h4 className="font-bold text-[#181E4B] mb-4">
                Join our Newsletter
            </h4>

            <div className="flex">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 h-11 text-sm bg-[#EEEEFF] text-[#181433] placeholder:text-gray-400 focus:outline-none"
                />
                <button
                className="h-11 px-5 bg-[#DF6951] text-white text-sm font-semibold"
                >
                Subscribe
                </button>
            </div>

            <p className="text-xs text-gray-500 mt-2">
                * Will send you weekly updates for your better tour packages.
            </p>
            </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-600">
          Copyright © Xpro 2022. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
