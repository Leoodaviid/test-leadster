"use client";
import React, { useState } from "react";
import WebinarsCard from "./WebinarsCard";
import Filter from "@/components/Filter";
import SelectOrder from "@/components/SelectOrder";
import Pagination from "@/components/Pagination";
import { useWebinars, useAllWebinars } from "@/hooks/useWebinars";
import { getCategoryFrom } from "@/utils/webinarsUtils";

const WebinarsList = () => {
  const [currentCategory, setCurrentCategory] = useState<string | undefined>(
    "Agências"
  );
  const [currentOrder, setCurrentOrder] = useState<string>("asc");
  const {
    data: webinars,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useWebinars(currentCategory, currentOrder);
  const { data: allWebinarsData } = useAllWebinars();
  const webinarsCategory = getCategoryFrom(allWebinarsData);

  const onFilterClick = (category?: string) => {
    if (category === currentCategory) {
      setCurrentCategory("");
    } else {
      setCurrentCategory(category);
    }
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="w-full max-w-[1320px] m-auto flex flex-col gap-3 justify-center lg:flex-row items-center py-5 border-b border-slate-300">
          <Filter
            category={webinarsCategory}
            currentCategory={currentCategory}
            onClick={onFilterClick}
          />
          <SelectOrder
            options={[
              { value: "asc", label: "Data de Publicação" },
              { value: "desc", label: "Mais Recentes" },
            ]}
            onOrderChange={setCurrentOrder}
            label="Ordenar por"
          />
        </div>
        <div className="w-full max-w-[1320px] m-auto grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-5 py-12 border-b border-slate-300">
          {webinars?.map((webinar) => (
            <WebinarsCard key={webinar.id} data={webinar} />
          ))}
        </div>
        <div className="flex items-center justify-center py-5">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </section>
  );
};

export default WebinarsList;
