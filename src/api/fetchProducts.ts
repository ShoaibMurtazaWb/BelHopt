import type { PaginatedProducts } from "../lib/types";
import api from "./axios";

export const fetchProducts = async ({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) => {
  const { data } = await api.get<PaginatedProducts>("/products/search", {
    params: {
      category,
      search,
    },
  });
  return data;
};
