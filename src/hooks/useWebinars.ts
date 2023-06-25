import { useQuery } from "@tanstack/react-query";
import { getWebinars, getAllWebinars } from "@/service/mainApi/webinars";
import { WebinarsProps } from "@/models/webinars";
import { useState } from "react";
import { WEBINARS_PER_PAGE } from "@/utils/webinarsUtils";

interface UseWebinarsData {
  webinars: WebinarsProps[];
  totalWebinars: number;
}

export function useWebinars(category?: string) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useQuery<UseWebinarsData>(
    ["webinars", category, currentPage],
    async () => {
      const response = await getWebinars({ page: currentPage, category });
      return { webinars: response.data, totalWebinars: response.total };
    },
    { keepPreviousData: true }
  );

  const totalPages = data && Math.ceil(data.totalWebinars / WEBINARS_PER_PAGE);

  return {
    data: data?.webinars,
    isLoading,
    isError,
    currentPage,
    setCurrentPage,
    totalPages,
  };
}

export function useAllWebinars() {
  return useQuery<WebinarsProps[]>(["allWebinars"], async () => {
    const response = await getAllWebinars();

    return response.data;
  });
}
