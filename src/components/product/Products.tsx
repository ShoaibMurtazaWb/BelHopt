// src/components/product/Products.tsx
import { useProducts } from "../../hooks/useProducts";
import { useQueryState } from "nuqs";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
export default function Products({ category }: { category?: string }) {
  const [search] = useQueryState("search");

  const {
    data: products,
    isLoading,
  } = useProducts({
    category,
    search: search && search.trim() ? search : undefined,
  });

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
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
    <div className="flex flex-wrap gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}