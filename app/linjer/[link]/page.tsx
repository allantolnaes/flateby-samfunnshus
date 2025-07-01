import { blogs } from "@/Data/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import CustomButton from "@/components/Helper/CustomButton";
import { MdSend } from "react-icons/md";

export default function LinjePage({ params }: { params: { link: string } }) {
  const { link } = params;

  const linje = blogs.find((item) => item.link === link);

  if (!linje) return notFound();

  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] min-h-screen bg-[#B0D9B1] overflow-hidden relative">
      <div className="flex flex-col justify-center w-4/5 mx-auto">
        {/* Title full width on top */}
        <h1
          data-aos="fade-right"
          data-aos-delay="100"
          className="text-bg text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] lg:leading-[4rem] xl:leading-[4.5rem] text-white mt-12 md:mt-0 py-12"
        >
          {linje.title}
        </h1>

        {/* Two-column grid below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Content side */}
          <div>
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="text-gray-900 text-lg mb-8"
              style={{ maxWidth: 550 }}
            >
              {linje.summary}
            </p>

            <p
              data-aos="fade-left"
              data-aos-delay="250"
              className="text-2xl font-bold mb-8 text-gray-900"
            >
              {linje.price}
            </p>

            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="flex space-x-6 mb-12"
            >
              <a
                href={linje.linkHel}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#F68537] hover:bg-[#e7650d] rounded-xl font-semibold transition text-white"
              >
                Helårskurs
              </a>
              <a
                href={linje.linkHalv}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#F68537] hover:bg-[#e7650d] rounded-xl font-semibold transition text-white"
              >
                Halvtårskurs
              </a>
            </div>

            {/* Søk nå button */}
            <div data-aos="fade-left" data-aos-delay="350">
              <CustomButton
                href="https://www.folkehogskole.no/index.php?page_id=80&skole_id=92"
                text="Søk nå"
                icon={<MdSend />}
              />
            </div>
          </div>

          {/* Image si*
