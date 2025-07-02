import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-10 pb-10 bg-basic">
      <div className="pb-10">
        <Link href={"#"}>
          <Image
            className="mx-auto"
            src="/images/logo.png"
            alt="Logo"
            width={250}
            height={250}
          />
        </Link>
      </div>

      {/* Social media icons */}
      <div className="flex justify-center space-x-8 mb-6">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-2xl text-blue-700 hover:text-blue-500 transition-colors"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.facebook.com"
          className="text-gray-700 hover:underline hover:text-blue-500 transition-colors"
        >
          Følg oss gjerne på FaceBook
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-2xl text-blue-700 hover:text-blue-500 transition-colors"
        >
          <FaFacebookF />
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
