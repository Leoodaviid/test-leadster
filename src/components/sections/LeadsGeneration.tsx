import Image from "next/image";
import React from "react";
import Comparative from "/public/comparativo_img_CTA.png";
import Stamp from "/public/selo_RD.png";
import NoCard from "/public/no-card-dark.webp";
import Rating from "/public/rating.webp";
import LinkButton from "@/components/Buttons/LinkButton";

const LeadsGeneration = () => {
  return (
    <section className="py-16 bg-[#F9FCFF] text-slate-700 relative overflow-hidden">
      <div className="shape z-0 sm:-left-[50%] md:-left-[30%] xl:-left-[10%]" />
      <div className=" container w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-start md:justify-end items-center">
          <Image
            className="z-10"
            width={500}
            height={500}
            src={Comparative}
            alt="Imagem com gráfico comparativo."
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 z-10 lg:p-8">
          <h2 className="text-xl sm:text-4xl md:text-[2.7em] font-medium tracking-normal">
            Pronto para triplicar sua
            <br />
            <strong>Geração de Leads?</strong>
          </h2>
          <h3 className="font-semibold text-lg">
            Criação e ativação <strong>em 4 minutos.</strong>
          </h3>
          <div className="w-full lg:w-11/12 flex justify-start items-center border-t border-slate-200 pt-3 gap-3">
            <LinkButton href="#">Ver demonstração</LinkButton>
            <Image className="w-5/12" src={Stamp} alt="Selo RD." />
          </div>
          <div className="w-full flex justify-start items-center font-bold text-xs">
            <div className="w-6/12 xl:w-60 flex flex-col sm:flex-row justify-start items-center gap-1">
              <Image
                className="w-4 h-4"
                width={16}
                height={16}
                src={NoCard}
                alt="Imagem que demonstra que não é necessário o uso de cartão de crédito."
              />
              <p>Não é necessário cartão de crédito |</p>
            </div>
            <div className="w-7/12 flex flex-col sm:flex-row justify-start items-center gap-1 pl-1">
              <Image
                className="w-24 h-6 pb-1.5 pt-0.5"
                width={92}
                height={16}
                src={Rating}
                alt="Imagem que demonstra a média de sastifação, total de 4.9,5 média."
              />
              <p>4.9/5 média de satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadsGeneration;
