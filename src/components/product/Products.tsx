// src/components/product/Products.tsx
import { useProducts } from "../../hooks/useProducts";
import { useQueryState } from "nuqs";
import ProductCard from "./ProductCard";

export default function Products({ category }: { category?: string }) {
  const [search] = useQueryState("search");

  const normalizedSearch =
    search && search.trim().length > 0 ? search : undefined;

  const { data: products, isLoading } = useProducts({
    category,
    search: normalizedSearch,
  });



  if (isLoading) return <p>Loading products...</p>;

  if (products.length === 0) {
    return (
      <p className="text-gray-500 text-center col-span-full">
        No products found
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-6">
      {products.map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </div>
  );
}