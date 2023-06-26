import Image from "next/image";
import React from "react";
import AssetHeader from "/public/asset-header.png";

const HeroBanner = () => {
  return (
    <section
      aria-label="Hero-banner"
      className="bg-[#f0f8ff] py-10 sm:gap-2 sm:py-16 md:py-24"
    >
      <div className="container w-full flex flex-col justify-center items-center gap-1">
        <div className="border-2 border-[#2c83fb] text-[9px] sm:text-sm py-1 px-3 sm:px-4 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-md">
          <p className="text-[#2c83fb] font-bold uppercase">
            Webinars Exclusivos
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border-b border-slate-300 sm:px-8 pb-4 relative">
          <p className="text-zinc-700 text-xl sm:text-4xl md:text-[2.7em] font-medium tracking-normal">
            Menos Conversinha,
          </p>
          <h1 className="text-[2em] sm:text-6xl md:text-[5em] leading-none gradient-text font-bold">
            Mais Conversão
          </h1>
          <Image
            src={AssetHeader}
            alt=""
            className="absolute w-5 top-7 sm:w-10 sm:top-10 -right-2 sm:right-4 md:right-5 md:top-12"
          />
        </div>

        <p className="font-bold text-zinc-700 text-[9px] sm:text-xs md:text-sm lg:text-base">
          Conheça as estratégias que{" "}
          <strong className="font-extrabold text-black">mudaram o jogo</strong>{" "}
          e como aplicá-las no seu negócio
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
