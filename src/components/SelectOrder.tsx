import React from "react";
import { useState } from "react";
import { AiOutlineCaretUp } from "react-icons/ai";

interface SelectProps {
  options: { value: string; label: string }[];
  onOrderChange?: (value: string) => void;
  label?: string;
}

const SelectOrder = ({ options, onOrderChange, label }: SelectProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full lg:w-[46%] flex justify-end items-center gap-3 text-slate-700">
      {label && <span className="font-bold">{label}</span>}
      <div className="relative">
        <select
          onChange={(event) =>
            onOrderChange && onOrderChange(event.target.value)
          }
          onClick={() => setOpen(!open)}
          onBlur={() => setOpen(false)}
          className="w-48 border border-slate-700 rounded-xl appearance-none pl-3 py-1 font-medium"
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <div className="absolute top-0.5 right-3 h-full flex items-center pointer-events-none rotate-180">
          <AiOutlineCaretUp
            className={`${open && "rotate-180"} h-5 w-5`}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectOrder;
