"use client";
import React, { useState } from "react";
import WebinarsCard from "@/components/WebinarsCard";
import Pagination from "@/components/Pagination";
import { useWebinars, useAllWebinars } from "@/hooks/useWebinars";
import { Filter } from "@/components/Filter";
import { getCategoryFrom } from "@/utils/webinarsUtils";

const WebinarsList = () => {
  const [currentCategory, setCurrentCategory] = useState<string>();
  const {
    data: webinars,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useWebinars(currentCategory);
  const { data: allWebinarsData } = useAllWebinars();
  const webinarsCategory = getCategoryFrom(allWebinarsData);

  const onFilterClick = (category?: string) => {
    if (category === currentCategory) {
      setCurrentCategory(undefined);
    } else {
      setCurrentCategory(category);
    }
  };

  return (
    <section>
      <Filter
        category={webinarsCategory}
        currentCategory={currentCategory}
        onClick={onFilterClick}
      />

      <div className="w-full max-w-[1024px] m-auto grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-5 py-10 px-5 border-b border-slate-300 mb-10">
        {webinars?.map((webinar) => (
          <WebinarsCard key={webinar.id} data={webinar} />
        ))}
      </div>
      <div className="flex items-center justify-center my-5">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
};

export default WebinarsList;
