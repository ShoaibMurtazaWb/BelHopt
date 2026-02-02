import type { PaginatedProducts } from "../lib/types";
import api from "./axios";

export const fetchProducts = async ({
  category,
  search,
  page = 1,
  limit = 12,
}: {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}) => {

    const skip = (page - 1) * limit;

  // SEARCH (highest priority)
  if (search && search.trim().length > 0) {
    const { data } = await api.get<PaginatedProducts>("/products/search", {
      params: { q: search, limit, skip },
    });
    return data;
  }

  // CATEGORY
  if (category && category !== "All") {
    const { data } = await api.get<PaginatedProducts>(
      `/products/category/${category}`,
      { params: { limit, skip } },
    );
    return data;
  }

  // ALL PRODUCTS
  const { data } = await api.get<PaginatedProducts>("/products", {
    params: { limit, skip },
  });
  return data;
};
