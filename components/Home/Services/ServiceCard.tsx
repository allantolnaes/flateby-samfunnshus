"use client";

import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    year: string;
    icon: string;
  };
};

const ServiceCard = ({ service }: Props) => {
  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-[#c277fa]">
      <h1 className="mt-4 text-lg font-bold text-gray-100">{service.title}</h1>
      <p className="mt-3 text-sm text-white text-opacity-80">
        {service.description}
      </p>
      <p className="text.xl text-white font-bold pt-4 ">{service.year}</p>
    </Tilt>
  );
};

export default ServiceCard;
