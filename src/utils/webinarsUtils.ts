import { WebinarsProps } from "@/models/webinars";

// define o número de webinars exibidos por página
export const WEBINARS_PER_PAGE = 9;

// retorna um array de objetos com nome e contagem de cada categoria de webinars
export const getCategoryFrom = (categories?: WebinarsProps[]) => {
  const categoryCounts: { [key: string]: number } = {};
  categories?.forEach((webinar) => {
    const category = webinar.category;
    if (!category) {
      return; // pula esta interação se a category for === null
    }
    if (categoryCounts[category]) {
      categoryCounts[category] += 1;
    } else {
      categoryCounts[category] = 1;
    }
  });
  const categoryData = Object.keys(categoryCounts)
    .map((category) => ({
      name: category,
      count: categoryCounts[category],
    }))
    .sort((a, b) => b.count - a.count);

  return categoryData;
};
