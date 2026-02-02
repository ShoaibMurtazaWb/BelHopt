import Products from "../../components/product/Products";
import HeroBanner from "./HeroBanner";
import { useCategories } from "../../hooks/useCategories";
import MainHeader from "../../components/Headers/MainHeader";
import Footer from "../../components/Footer/Footer";
import { useQueryState } from "nuqs";

export default function Home() {
  const { data: categories = [] } = useCategories();
  const [category, setCategory] = useQueryState("category", {
    defaultValue: "All",
  });
  const [search] = useQueryState("search");


  return (
    <>
      <MainHeader />
      <HeroBanner />

      <section className="flex max-w-700 mx-auto">
        {/* Sidebar */}
        <aside className="w-110 flex flex-col gap-6 h-screen border-r border-l border-b pl-20 pr-1 py-10 border-light-gray">
          <h2>Categories</h2>

          <ul className="flex flex-col gap-5 overflow-y-auto custom-scrollbar">
            {/* ALL */}
            <li key="All">
              <button
                onClick={() => setCategory("")}
                className={`flex items-center gap-4 w-full text-left
                  ${category === ""
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
                  onClick={() => setCategory(cat.slug)}
                  className={`flex items-center gap-4 w-full text-left
                    ${category === cat.slug
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
            {category === "All"
              ? "All Products"
              : category.replace("-", " ")}
          </h1>

          <Products
            category={search ? undefined : category}
          />
        </main>
      </section>

      <Footer />
    </>
  );
}