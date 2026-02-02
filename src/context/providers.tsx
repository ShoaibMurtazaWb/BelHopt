import type React from "react";
import { AuthContextProvider } from "./auth-context";
import { CartProvider } from "./CartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <CartProvider>{children}</CartProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </NuqsAdapter>
  );
};

export default Providers;
