import React from "react";
import Image from "next/image";
import Logo from "/public/logo.png";

const Header = () => {
  return (
    <header className="w-full h-16 sm:h-24 flex justify-center items-center p-4">
      <Image
        src={Logo}
        alt="Logo Leadster"
        className="w-32 sm:w-48 h-7 sm:h-10"
      />
    </header>
  );
};

export default Header;
