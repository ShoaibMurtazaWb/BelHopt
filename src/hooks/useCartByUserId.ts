import { useQuery } from "@tanstack/react-query";
import fetchCart from "../api/fetchCart";
import { useAuth } from "../context/auth-context";

export default function useCartByUserId() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["carts", { users: user?.id }],
    enabled: Boolean(user),
    queryFn: () => fetchCart(user?.id),
  });
}
