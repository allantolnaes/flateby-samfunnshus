import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-10 pb-10 bg-basic">
      <div className="pb-10">
        <Link href={"#"}>
          <Image
            className="mx-auto"
            src="/images/stuf-logo.png"
            alt="Logo"
            width={250}
            height={250}
          />
        </Link>
      </div>

      {/* Social media icons */}
      <div className="flex justify-center space-x-8 mb-6">
        <a
          href="https://www.facebook.com/stufskole/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-2xl text-blue-700 hover:text-blue-500 transition-colors"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.youtube.com/@stavangerurbanfolkehgskole3401/videos"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-2xl text-red-500 hover:text-red-600 transition-colors"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/stufskole/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-2xl text-purple-400 hover:text-[#E4405F] transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@stufskole"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="text-2xl text-gray-800 hover:text-purple-800 transition-colors"
        >
          <FaTiktok />
        </a>
      </div>

      <p className="text-gray-700 mt-6 text-center">
        &copy; 2025 - All rights reserved - StUF Folkehøyskole
      </p>
      <p className="text-gray-700 mt-3 text-center">Design by Allan Tolnæs</p>
    </div>
  );
};

export default Footer;
