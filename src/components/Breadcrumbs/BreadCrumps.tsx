import { Link, useLocation, useParams } from "react-router-dom";
import { useQueryState } from "nuqs";
import { useProduct } from "../../hooks/useProducts";

// helper → Title Case
const toTitleCase = (str: string) =>
    str
        .split("-")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

export default function Breadcrumbs() {
    const location = useLocation();
    const params = useParams<{ id?: string; category?: string }>();

    const [search] = useQueryState("search");
    const [category] = useQueryState("category");

    // 🔹 fetch product title for breadcrumb
    const { data: product } = useProduct(
        params.id ? Number(params.id) : undefined
    );

    // ❌ Hide breadcrumbs on pure Home
    const isPureHome =
        location.pathname === "/" &&
        !search &&
        !category;

    if (isPureHome) return null;

    const crumbs: { label: string; to?: string }[] = [
        { label: "Home", to: "/" },
    ];

    // 🔍 SEARCH
    if (search) {
        crumbs.push({
            label: `Search: "${search}"`,
        });
    }

    // 📦 CATEGORY (Home OR category page)
    const activeCategory = params.category || category;
    if (activeCategory) {
        crumbs.push({
            label: toTitleCase(activeCategory),
            to: `/category/${activeCategory}`,
        });
    }

    // 🛒 PRODUCT (use real title)
    if (params.id && product) {
        crumbs.push({
            label: product.title,
        });
    }

    // 🧺 CART
    if (location.pathname === "/cart") {
        crumbs.push({ label: "Cart" });
    }

    // 💳 CHECKOUT
    if (location.pathname === "/checkout") {
        crumbs.push({ label: "Checkout" });
    }

    return (
        <nav className="px-20 py-3 text-sm text-gray-500">
            <ol className="flex gap-2">
                {crumbs.map((crumb, index) => (
                    <li key={index} className="flex items-center gap-2">
                        {crumb.to ? (
                            <Link
                                to={crumb.to}
                                className="hover:underline text-gray-600"
                            >
                                {crumb.label}
                            </Link>
                        ) : (
                            <span className="text-gray-900 font-medium">
                                {crumb.label}
                            </span>
                        )}
                        {index < crumbs.length - 1 && <span>/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
}