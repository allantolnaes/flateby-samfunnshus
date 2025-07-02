"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { utleieData } from "@/Data/utleieData";

type ParamsType = {
  slug: string;
};

export default function RoomPage({ params }: { params: Promise<ParamsType> }) {
  const { slug } = use(params) as ParamsType;

  const room = utleieData.find((r) => r.slug === slug);

  if (!room) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-basic pt-[16vh] pb-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col">
        <div className="text-center justify-center bg-[#307532] text-white rounded-t-xl">
          <h1 className="text-4xl font-bold my-6">{room.name}</h1>

          <p className="mb-8">{room.description}</p>
        </div>

        <div className="rounded-b-xl overflow-hidden shadow-md mb-10">
          <Image
            src={room.image}
            alt={room.name}
            width={800}
            height={450}
            className="object-cover w-full h-auto"
            priority
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#307532]">Priser</h2>
          <ul className="space-y-3">
            {room.prices.map(({ label, price }, idx) => (
              <li
                key={idx}
                className="flex justify-between border-b border-gray-200 pb-2"
              >
                <span>{label}</span>
                <span className="font-semibold">{price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <Link
            href="/utleie"
            className="inline-block bg-[#307532] hover:bg-[#255020] text-white px-6 py-3 rounded-lg transition"
          >
            Tilbake til utleie og priser
          </Link>
        </div>
      </div>
    </div>
  );
}
