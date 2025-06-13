import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-10 pb-10 bg-[#4ED7F1]">
      <div className="pb-10">
        <Link href={"#"}>
          <Image
            className="mx-auto"
            src="/images/logo.png"
            alt="Logo"
            width={180}
            height={180}
          />
        </Link>
      </div>
      <p className="text-gray-900 mt-6 text-center">
        &copy; 2025 - All rights reserved - Allan Tolnæs
      </p>
    </div>
  );
};

export default Footer;
