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
        "selected text-white hover:text-white bg-primary-blue border-none transition"
      } ${
        index === category.length - 1 && "col-start-1 col-end-3"
      } border border-slate-900 rounded-full hover:border-primary-blue hover:text-primary-blue`}
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
