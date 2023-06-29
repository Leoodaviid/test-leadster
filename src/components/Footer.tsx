import React from "react";
import Image from "next/image";
import Logo from "/public/logo.png";
import Link from "next/link";
import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagram,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center py-10 ">
          <Image className="pb-1 w-56" src={Logo} alt="logo" />
          <p className="text-xs text-[#7f88a6]">
            Transformando visitantes em clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-3 justify-start items-start text-sm lg:text-base text-[#7f88a6] pb-10">
          <div className="flex flex-col gap-4 pb-4">
            <p className="md:pb-10 text-lg lg:text-xl font-semibold text-slate-700">
              Links Principais
            </p>
            <Link href={"#"} className="hover:text-primary-blue">
              Home
            </Link>
            <Link href={"#"} className="hover:text-primary-blue">
              Ferramentas
            </Link>
            <Link href={"#"} className="hover:text-primary-blue">
              Preços
            </Link>
            <Link href={"#"} className="hover:text-primary-blue">
              Contato
            </Link>
          </div>
          <div className="flex flex-col gap-4 pb-4">
            <p className="md:pb-10 text-lg lg:text-xl  font-semibold text-slate-700">
              Cases
            </p>
            <Link href={"#"} className="hover:text-primary-blue">
              Geração de Leads B2B
            </Link>
            <Link href={"#"} className="hover:text-primary-blue">
              Geração de Leads em Software
            </Link>
            <Link href={"#"} className="hover:text-primary-blue">
              Geração de Leads em Imobiliária
            </Link>
            <Link href={"#"} className="hover:text-primary-blue">
              Cases de Sucesso
            </Link>
          </div>
          <div className="flex flex-col gap-4 pb-4">
            <p className="md:pb-10 text-lg lg:text-xl font-semibold text-slate-700">
              Materiais
            </p>
            <Link href={"#"} className="hover:text-primary-blue">
              Blog
            </Link>
            <Link href={"#"} className="hover:text-primary-blue">
              Parcerias com Agências
            </Link>
            <Link href={"#"} className="hover:text-primary-blue">
              Guia Definitivo do Markenting
            </Link>
            <Link href={"#"} className="hover:text-primary-blue">
              Materiais Gratuitos
            </Link>
          </div>
          <div className="flex flex-col gap-4 pb-4">
            <p className="md:pb-10 text-lg lg:text-xl font-semibold text-slate-700">
              Siga a Leadster
            </p>
            <div className="flex gap-2">
              <div className="flex justify-center items-center h-11 w-11 rounded-full cursor-pointer bg-[#f7f8fb] hover:bg-social-link-hover hover:text-white transition duration-500 ease-in-out">
                <a
                  href="https://www.linkedin.com/company/leadster-platform/"
                  target="_blanck"
                >
                  <BiLogoLinkedin size={22} />
                </a>
              </div>
              <div className="flex justify-center items-center h-11 w-11 rounded-full cursor-pointer bg-[#f7f8fb] hover:bg-social-link-hover hover:text-white transition duration-500 ease-in-out">
                <a
                  href="https://www.facebook.com/leadsterplatform"
                  target="_blanck"
                >
                  <BiLogoFacebook size={22} />
                </a>
              </div>
              <div className="flex justify-center items-center h-11 w-11 rounded-full cursor-pointer bg-[#f7f8fb] hover:bg-social-link-hover hover:text-white transition duration-500 ease-in-out">
                <a
                  href="https://www.instagram.com/leadster.com.br/"
                  target="_blanck"
                >
                  <BiLogoInstagram size={22} />
                </a>
              </div>
            </div>
            <a href="mailto:contato@leadster.com.br">
              <span className="text-slate-700 font-semibold">Email: </span>
              contato@leadster.com.br
            </a>
            <a href="tel:+5542988289851">
              <span className="text-slate-700 font-semibold">Telefone: </span>55
              (42) 98828-9851
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between border-t border-slate-200 text-sm gap-2 md:text-base text-[#7f88a6] pt-10 pb-5">
          <p>
            Copyright &copy; 2015 - 2022 Todos os direitos reservados |{" "}
            <a href="#hero-banner" className="text-primary-blue">
              Leadster
            </a>
          </p>
          <p>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            <a className="text-primary-blue" href="#">
              Termos de uso
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
