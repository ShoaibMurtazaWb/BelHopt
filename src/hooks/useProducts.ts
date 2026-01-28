import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/fetchProducts";
import api from "../api/axios";
import type { PaginatedProducts, Product } from "../lib/types";

const tranformPaginatedQueryRespons = (data: PaginatedProducts | undefined) => {
  return {
    data: data?.products ?? [],
    pagination: {
      total: data?.total ?? 0,
      limit: data?.limit ?? 0,
      skip: data?.skip ?? 0,
    },
  };
};




export function useProducts({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const { data, ...query } = useQuery({
    queryKey: ["products", { category, search }],
    queryFn: async () => await fetchProducts({ category, search }),
  });

  return {
    ...query,
    ...tranformPaginatedQueryRespons(data),
  };
}



export const useProduct = (productId: number | undefined) => {
  return useQuery({
    queryKey: ["products", productId],
    enabled: Boolean(productId),
    queryFn: async () => {
      const res = await api.get<Product>("/products/" + productId);
      return res.data;
    },
  });
};



export const useProductsByCategory = (category: string | undefined) => {
  const { data, ...query } = useQuery({
    queryKey: ["products", { category: category ?? null }],
    enabled: Boolean(category),
    queryFn: async () => {
      const res = await api.get<PaginatedProducts>(
        "/products/category/" + category,
      );
      return res.data;
    },
  });
  return {
    ...query,
    ...tranformPaginatedQueryRespons(data),
  };
};
