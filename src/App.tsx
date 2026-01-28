import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/Product/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import CategoryProducts from "./pages/Product/CategoryProducts";
// ... imports for Home, ProductDetail, etc.

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/category/:category" element={<CategoryProducts />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
    </Routes>
  );
}
