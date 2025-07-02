import Image from "next/image";
import React from "react";

type Props = {
  review: {
    name: string;
    review: string;
    profession: string;
    image: string;
  };
};

const ReviewCard = ({ review }: Props) => {
<<<<<<< HEAD
  const { image, name, profession, review: clientReview } = review;

=======
  const { name, profession, rating, review: clientReview } = review;
>>>>>>> 77fa4c8b3934d7cb02e1383ebc3e7594902bc07c
  return (
    <div className="relative rounded-xl overflow-hidden m-4 h-full flex flex-col text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image} // change to your desired background image path
          alt="Background"
          fill
          className="object-cover brightness-80"
          priority
        />
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
        <div>
          <Image
            src="/images/quote-icon.png"
            alt="Quote icon"
            width={20}
            height={20}
          />
          <p className="text-gray-200 mt-4">{clientReview}</p>
          <Image
            className="ml-auto mt-4"
            src="/images/quote-icon.png"
            alt="Quote icon"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="bg-gray-100 bg-opacity-90 relative z-10">
        <div className="pt-3 pb-6 px-6 flex items-center space-x-6 min-h-[80px]">
          <div>
            <h1 className="text-lg font-bold text-black">{name}</h1>
            <p className="text-base text-gray-700">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
