import { Link, useLocation, useParams } from "react-router-dom";
import { useQueryState } from "nuqs";

export default function Breadcrumbs() {
    const location = useLocation();
    const params = useParams();
    const [search] = useQueryState("search");

    const crumbs: { label: string; to?: string }[] = [
        { label: "Home", to: "/" },
    ];

    // SEARCH
    if (search) {
        crumbs.push({
            label: `Search: "${search}"`,
        });
    }

    // CATEGORY
    if (location.pathname.startsWith("/category") && params.category) {
        crumbs.push({
            label: params.category,
            to: `/category/${params.category}`,
        });
    }

    // PRODUCT
    if (location.pathname.startsWith("/product") && params.id) {
        crumbs.push({
            label: `Product ${params.id}`,
        });
    }

    // CART
    if (location.pathname === "/cart") {
        crumbs.push({ label: "Cart" });
    }

    // CHECKOUT
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