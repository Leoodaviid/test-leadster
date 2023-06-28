import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";

interface LinkButtonProps extends LinkProps {
  children: ReactNode;
}

const LinkButton = ({ href, ...props }: LinkButtonProps) => {
  return (
    <Link
      className="w-auto h-14 py-4 px-7 rounded-full bg-[#007DFF] text-white font-semibold flex justify-center items-center uppercase"
      href={href}
      {...props}
    />
  );
};

export default LinkButton;
