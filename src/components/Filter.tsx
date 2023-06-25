import React from "react";
import { CategoriesProps } from "@/models/webinars";

interface FilterCategoriesProps {
  category?: CategoriesProps[];
  currentCategory?: string;
  onClick: (name?: string) => void;
}
export const Filter = ({
  category,
  currentCategory,
  onClick,
}: FilterCategoriesProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    name?: string
  ) => {
    event.preventDefault();
    onClick && onClick(name);
  };
  const selectors = category?.map(({ name }) => (
    <button
      key={name.toLocaleLowerCase()}
      className={`${
        currentCategory === name
          ? "selected text-white hover:text-white bg-[#2c83fb] border-none transition"
          : undefined
      } border border-zinc-900 rounded-full py-1.5 px-5 hover:border-[#2c83fb] hover:text-[#2c83fb]`}
      onClick={(event) => handleClick(event, name)}
    >
      <span>{name}</span>
    </button>
  ));

  return (
    <div className="w-full max-w-[1024px] m-auto flex flex-wrap justify-center items-center gap-5 pt-5 md:pt-20 pb-5 px-5 border-b border-slate-300">
      {selectors}
    </div>
  );
};
