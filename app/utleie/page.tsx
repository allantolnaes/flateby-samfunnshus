"use client";

import Image from "next/image";
import Link from "next/link";
import { utleieData, utstyrData } from "@/Data/utleieData";

export default function UtleiePage() {
  return (
    <div className="min-h-screen bg-basic pt-[12vh] pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#307532] pb-3">
          Utleie og priser
        </h1>
        <p className="mb-12 md:mb-16 text-gray-500 text-center">
          Prisene gjelder per dag.
        </p>

        {/* Room cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {utleieData.map((room) => (
            <Link key={room.slug} href={`/utleie/${room.slug}`}>
              <div className="bg-[#307532] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full">
                <div className="w-full h-[250px] relative flex-shrink-0">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold text-white mb-3">
                    {room.name}
                  </h2>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {room.description}
                  </p>
                  <ul className="text-sm text-white space-y-1">
                    {room.prices.map((p, idx) => (
                      <li key={idx} className="flex justify-between">
                        <span>{p.label}</span>
                        <span className="font-medium">{p.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Extra equipment section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-[#307532] ">
            Utstyr til leie
          </h2>
          <p className="mb-6 text-gray-500">
            Alle priser gjelder per gjenstand.
          </p>
          <div className="bg-white rounded-xl shadow-md p-6 space-y-2">
            {utstyrData.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between text-gray-700 border-b last:border-none py-2"
              >
                <span>{item.label}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
