import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";

interface LinkButtonProps extends LinkProps {
  children: ReactNode;
}

const LinkButton = ({ href, ...props }: LinkButtonProps) => {
  return (
    <Link
      className="w-auto h-14 py-4 px-7 rounded-full border border-transparent bg-primary-blue text-white font-semibold flex justify-center items-center uppercase hover:bg-white hover:text-primary-blue hover:border hover:border-primary-blue transition duration-700 ease-in-out"
      href={href}
      {...props}
    />
  );
};

export default LinkButton;
