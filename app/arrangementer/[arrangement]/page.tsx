import { arrangementer } from "@/Data/data";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: {
    arrangement: string; // ✅ use same name as folder
  };
};

export default function ArrangementPage({ params }: Props) {
  const { arrangement: arrangementLink } = params;

  const arrangement = arrangementer.find(
    (item) => item.link === arrangementLink
  );

  if (!arrangement) return notFound();

  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] min-h-screen bg-basic overflow-hidden relative">
      <div className="flex flex-col justify-center w-4/5 mx-auto">
        <h1 className="text-bg text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] lg:leading-[4rem] xl:leading-[4.5rem] text-white mt-12 md:mt-0 py-12">
          {arrangement.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <p className="text-gray-900 text-lg mb-8" style={{ maxWidth: 550 }}>
              {arrangement.description1}
            </p>
            <p className="text-gray-900 text-lg mb-8" style={{ maxWidth: 550 }}>
              {arrangement.description2}
            </p>
            <p className="text-2xl font-bold mb-8 text-gray-900">
              {arrangement.dato}
            </p>
            <div className="flex space-x-6 mb-12" />
          </div>
          <div
            className="mx-auto rounded-[3rem] border-[3.5px] border-[#618264] overflow-hidden"
            style={{ maxWidth: 700 }}
          >
            <Image
              src={arrangement.image}
              alt={arrangement.title}
              width={700}
              height={700}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
