export interface WebinarsProps {
  id: string;
  category: string;
  author: string;
  thumbnail: string;
  videoUrl: string;
  title: string;
  description: string;
}

export interface CategoriesProps {
  name: string;
}

export interface GetWebinarsProps {
  page: number;
  category?: string;
}

export interface GetWebinarsResponse {
  data: WebinarsProps[];
  total: number;
}
