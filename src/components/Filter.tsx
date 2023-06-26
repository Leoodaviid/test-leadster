import React from "react";
import { CategoriesProps } from "@/models/webinars";

interface FilterCategoriesProps {
  category?: CategoriesProps[];
  currentCategory?: string;
  onClick: (name?: string) => void;
}

const Filter = ({
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

  const selectors = category?.map(({ name }, index) => (
    <button
      key={name.toLocaleLowerCase()}
      className={`py-1.5 lg:px-3 ${
        currentCategory === name &&
        "selected text-white hover:text-white bg-[#2c83fb] border-none transition"
      } ${
        index === category.length - 1 && "col-start-1 col-end-3"
      } border border-zinc-900 rounded-full hover:border-[#2c83fb] hover:text-[#2c83fb]`}
      onClick={(event) => handleClick(event, name)}
    >
      <span>{name}</span>
    </button>
  ));

  return (
    <>
      <div className="w-full grid grid-cols-2 lg:flex gap-3 font-medium">
        {selectors}
      </div>
    </>
  );
};

export default Filter;
