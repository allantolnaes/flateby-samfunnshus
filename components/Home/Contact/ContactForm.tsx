import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#c277fa] rounded-lg p-4 sm:p-10">
      <h1 className="text-white text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        La oss jobbe sammen!
      </h1>
      <p className="text-white mt-3 lg:text-base text-xs md:text-sm">
        Her kan du sende meg en melding om hva som helst. Ideer til hva vi kan
        skape sammen, eller kanskje du har noen fler spørsmål om mine tjenester
        eller tigjengelige tider?
      </p>
      {/* Input Fields */}
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Fornavn"
            className="flex-1 bg-[#FFFA8D] text-black placeholder:text-black px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Etternavn"
            className="flex-1 bg-[#FFFA8D] text-black placeholder:text-black px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 bg-[#FFFA8D] text-black placeholder:text-black px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Telefonnummer"
            className="flex-1 bg-[#FFFA8D] text-black placeholder:text-black px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div>
          <select className="w-full mt-5 bg-[#FFFA8D] text-black placeholder:text-black px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none">
            <option value="" disabled selected>
              Velg et alternativ
            </option>
            <option value="frontend">Dans</option>
            <option value="backend">Sang</option>
            <option value="fullstack">Musikalartist</option>
          </select>
        </div>
        <textarea
          className="w-full mt-5 bg-[#FFFA8D] text-black placeholder:text-black px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={5}
          placeholder="Skriv din melding her!"
        ></textarea>
        <div className="mt-4">
          <button className="px-8 py-3.5 bg-[#FFFA8D] text-black hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
            Send melding
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
