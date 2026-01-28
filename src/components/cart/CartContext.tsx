import React, { useContext, createContext, useState } from "react";
import type { CartItem } from "../../lib/types";
import type { CartContextType } from "../../lib/types";


type CartProviderProps = { children: React.ReactNode }
const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: CartProviderProps) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (item: Omit<CartItem, "quantity">) => {
        setItems(prev => {
            const found = prev.find(p => p.id === item.id);

            if (found) {
                return prev.map(p =>
                    p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }

            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const increase = (id: number) => {
        setItems(prev =>
            prev.map(p =>
                p.id === id ? { ...p, quantity: p.quantity + 1 } : p
            )
        );
    };

    const decrease = (id: number) => {
        setItems(prev =>
            prev
                .map(p =>
                    p.id === id ? { ...p, quantity: p.quantity - 1 } : p
                )
                .filter(p => p.quantity > 0)
        );
    };

    const totalItems = items.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (

        // provider shares the value of all these functions and variables to whole app
        <CartContext.Provider
            value={{ items, addItem, increase, decrease, totalItems }}
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