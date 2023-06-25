import api from "./config";
import {
  WebinarsProps,
  GetWebinarsProps,
  GetWebinarsResponse,
} from "@/models/webinars";
import { WEBINARS_PER_PAGE } from "@/utils/webinarsUtils";

export const getWebinars = async ({
  page,
  category,
}: GetWebinarsProps): Promise<GetWebinarsResponse> => {
  const response = await api.get<WebinarsProps[]>(
    `/webinars?_page=${page}&_limit=${WEBINARS_PER_PAGE}&category=${category}`
  );

  const total = parseInt(response.headers["x-total-count"]);

  return { data: response.data, total };
};

export const getAllWebinars = () =>
  api.get<WebinarsProps[]>(`/webinars?_sort=category&_order=asc`);
