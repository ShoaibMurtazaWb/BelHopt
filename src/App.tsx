import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/Product/ProductDetail";
import Checkout from "./pages/checkout/Checkout";
import CategoryProducts from "./pages/Product/CategoryProducts";
import Cart from "./pages/Cart/Cart";
import RecipesPage from "./pages/Recipes/recipesPage";
import CartsPage from "./pages/Cart/CartsPage";
import NotFound from "./pages/others/NotFoundPage";
import Login from "./pages/auth/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path={ROUTES.CART} element={<Cart />} />
        <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
        <Route path={ROUTES.RECIPES} element={<RecipesPage />} />
        <Route path="/carts" element={<CartsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
