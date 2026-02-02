import { useContext, createContext, useState, useEffect } from "react";
import type { CartItem, CartContextType } from "../lib/types";
import useCartByUserId from "../hooks/useCartByUserId";
import api from "../api/axios";
import { useAuth } from "./auth-context";
import { useNavigate } from "react-router-dom";
import { showToast } from "../components/showToast";

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { data } = useCartByUserId();
  const navigate = useNavigate();
  useEffect(() => {
    if (data?.products) {
      setItems(data.products);
    }

  }, [data]);

  const { user } = useAuth();

  const addItem = async (item: CartItem) => {
    if (!user) {navigate("/login"); showToast({type:"info", variant:"light" , message: "Please login to continue shooping"},) ; return}

    // No cart yet  
    if (!data) {
      const res = await api.post("/carts/add", {
        userId: user?.id,
        products: [{ id: item.id, quantity: 1 }],
      });

      setItems(res.data.products);
      return;
    }

    const existing = items.find((p) => p.id === item.id);

    const updatedProducts = existing
      ? items.map((p) =>
          p.id === item.id
            ? { id: p.id, quantity: p.quantity + 1 }
            : { id: p.id, quantity: p.quantity },
        )
      : [
          ...items.map((p) => ({ id: p.id, quantity: p.quantity })),
          { id: item.id, quantity: 1 },
        ];

    const res = await api.put(`/carts/${data?.id}`, {
      merge: false,
      products: updatedProducts,
    });

    setItems(res.data.products);
  };

  const removeItem = async (id: number) => {
    if (!data || !user) return;

    const updatedProducts = items
      .filter((p) => p.id !== id)
      .map((p) => ({ id: p.id, quantity: p.quantity }));

    const res = await api.put(`/carts/${data.id}`, {
      merge: false,
      products: updatedProducts,
    });

    setItems(res.data.products);
  };

  const increase = async (id: number) => {
    if (!data || !user) return;

    const updatedProducts = items.map((p) =>
      p.id === id
        ? { id: p.id, quantity: p.quantity + 1 }
        : { id: p.id, quantity: p.quantity },
    );

    const res = await api.put(`/carts/${data.id}`, {
      merge: false,
      products: updatedProducts,
    });

    setItems(res.data.products);
  };

  
  const decrease = async (id: number) => {
    if (!data || !user) return;

    const updatedProducts = items
      .map((p) =>
        p.id === id
          ? { id: p.id, quantity: p.quantity - 1 }
          : { id: p.id, quantity: p.quantity },
      )
      .filter((p) => p.quantity > 0);

    const res = await api.put(`/carts/${data.id}`, {
      merge: false,
      products: updatedProducts,
    });

    setItems(res.data.products);

  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);


  return (
    // provider shares the value of all these functions and variables to whole app
    <CartContext.Provider
      value={{ items, removeItem, addItem, increase, decrease, totalItems }}
    >
      {/* While app is the child as the provider is wrapped over the app */}
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
}
