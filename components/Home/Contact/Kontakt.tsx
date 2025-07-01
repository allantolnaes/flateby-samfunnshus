import React from "react";
import ContactInfo from "@/components/Home/Contact/ContactInfo";
import Image from "next/image";
import SectionHeading from "@/components/Helper/SectionHeading";

const Kontakt = () => {
  return (
    <div id="kontakt" className="min-h-screen bg-basic pt-15 scroll-mt-22">
      <SectionHeading>Kontaktinformasjon</SectionHeading>
      <div className="flex items-center justify-center pt-20 px-6 md:px-12 ">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side: Contact Info */}
          <div className="p-6 md:p-12 bg-[#618264] rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-10 text-white">Kontakt oss</h2>
            <ContactInfo />
          </div>

          {/* Right side: Image */}
          <div className="md:display-block relative w-full h-76 md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/kontakt.webp"
              alt="Kontakt oss"
              fill
              className="object-cover rounded-[3rem] border-[3.5px] border-[#618264]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
