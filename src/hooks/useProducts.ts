import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/fetchProducts";
import api from "../api/axios";
import type { PaginatedProducts, Product } from "../lib/types";

const transformPaginatedQueryResponse = (
  data: PaginatedProducts | undefined,
) => {
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
  page = 1,
  limit = 20  ,
}: {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}) {
  const { data, ...query } = useQuery<PaginatedProducts>({
    queryKey: ["products", { category, search, page, limit }],
    queryFn: () =>
      fetchProducts({
        category,
        search,
        page,
        limit,
      }),
    placeholderData: (prev) => prev,
  });

  return {
    ...query,
    ...transformPaginatedQueryResponse(data),
  };
}


export const useProduct = (productId: number | undefined) => {
  return useQuery({
    queryKey: ["products", { id: productId }],
    enabled: Boolean(productId),
    queryFn: async () => {
      const res = await api.get<Product>("/products/" + productId);
      return res.data;
    },
  });
};

export const useProductsByCategory = ({
  category,
  page = 1,
  limit = 20,
}: {
  category?: string;
  page?: number;
  limit?: number;
}) => {
  const skip = (page - 1) * limit;

  const { data, ...query } = useQuery({
    queryKey: ["products", { category, page, limit }],
    enabled: Boolean(category),
    queryFn: async () => {
      const res = await api.get<PaginatedProducts>(
        `/products/category/${category}`,
        { params: { limit, skip } },
      );
      return res.data;
    },
    placeholderData: (prev) => prev,
  });

  return {
    ...query,
    ...transformPaginatedQueryResponse(data),
  };
};
