// src/components/product/Products.tsx
import { useProducts } from "../../hooks/useProducts";
import { useQueryState } from "nuqs";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useEffect } from "react";

export default function Products({ category }: { category?: string }) {




  const [search] = useQueryState("search");
  const [page, setPage] = useQueryState("page", {
    defaultValue: 1,
    parse: Number,
  });
    useEffect(() => {
    setPage(1);
  }, [category, search]);

  const limit = 20;

  const {
    data: products,
    pagination,
    isLoading,
  } = useProducts({
    category,
    search: search && search.trim() ? search : undefined,
    page,
    limit,
  });

  const totalPages = Math.ceil(pagination.total / limit);

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-6">
        {Array.from({ length: limit }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-gray-500 text-center col-span-full">
        No products found
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="rounded px-4 py-2 bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>

          <span className="px-3 py-2 text-sm">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
            className="rounded px-4 py-2 bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
