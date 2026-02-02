import type { PaginatedProducts } from "../lib/types";
import api from "./axios";

export const fetchProducts = async ({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) => {

  // SEARCH (highest priority)
  if (search && search.trim().length > 0) {
    const { data } = await api.get<PaginatedProducts>("/products/search", {
      params: { q: search },
    });
    return data;
  }

  // CATEGORY
  if (category && category !== "All") {
    const { data } = await api.get<PaginatedProducts>(
      `/products/category/${category}`,
    );
    return data;
  }

  // ALL PRODUCTS
  const { data } = await api.get<PaginatedProducts>("/products");
  return data;
};
