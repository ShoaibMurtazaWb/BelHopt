import { useParams } from "react-router-dom";
import MainHeader from "../../components/Headers/MainHeader";
import ProductCard from "../../components/product/ProductCard";
import { useProductsByCategory } from "../../hooks/useProducts";

export default function CategoryProducts() {
    const { category } = useParams<{ category: string }>();
    const { data: products } = useProductsByCategory({
        category,
        page: 1,
        limit: 12,
    });

    return (
        <>
            <MainHeader />

            <main className="p-20">
                <h1 className="text-3xl font-semibold mb-10 capitalize">
                    {category?.replace("-", " ")}
                </h1>

                <div className="grid grid-cols-4 gap-10">
                    {products.map(item => (
                        <ProductCard
                            key={item.id}
                            product={item}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}