import { useState } from "react";
import Products from "../../components/product/Products";
import HeroBanner from "./HeroBanner";
import { useCategories } from "../../hooks/useCategories";
import MainHeader from "../../components/Headers/MainHeader";
import Footer from "../../components/Footer/Footer";
import { useQueryState } from "nuqs";
// import { useParams } from "react-router-dom";

export default function Home() {
  const { data: categories = [] } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [search] = useQueryState("search");
  // const { category } = useParams<{ category?: string }>();

  return (
    <>
      <MainHeader />
      <HeroBanner />

      <section className="flex max-w-[2800px] mx-auto">
        {/* Sidebar */}
        <aside className="w-110 flex flex-col gap-6 h-screen border-r border-l border-b pl-20 pr-1 py-10 border-light-gray">
          <h2>Categories</h2>

          <ul className="flex flex-col gap-5 overflow-y-auto custom-scrollbar">
            {/* ALL */}
            <li key="All">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`flex items-center gap-4 w-full text-left
                  ${selectedCategory === "All"
                    ? "font-semibold text-red-500"
                    : ""
                  }`}
              >
                <img
                  src="/detergent.svg"
                  className="bg-gray-200 rounded-full p-2 w-10 h-10"
                />
                All
              </button>
            </li>

            {/* CATEGORIES */}
            {categories.map((cat) => (
              <li key={cat.slug}>
                <button
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`flex items-center gap-4 w-full text-left
                    ${selectedCategory === cat.slug
                      ? "font-semibold text-red-500"
                      : ""
                    }`}
                >
                  <img
                    src="/detergent.svg"
                    className="bg-gray-200 rounded-full p-2 w-10 h-10"
                  />
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Products */}
        <main className="flex flex-col w-full py-10 px-15">
          <h1 className="mb-6 capitalize">
            {selectedCategory === "All"
              ? "All Products"
              : selectedCategory.replace("-", " ")}
          </h1>

          <Products
  category={search ? undefined : selectedCategory}
/>        </main>
      </section>

      <Footer />
    </>
  );
}