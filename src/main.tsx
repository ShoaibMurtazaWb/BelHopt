import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import App from "./App";
import "./index.css"
import { CartProvider } from "./components/cart/CartContext";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NuqsAdapter } from 'nuqs/adapters/react'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NuqsAdapter>
          <CartProvider>

            <App />
            <Toaster position="top-center" />
            <ReactQueryDevtools initialIsOpen={false} />

          </CartProvider>
        </NuqsAdapter>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);