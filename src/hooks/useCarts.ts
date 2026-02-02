import { useQuery } from "@tanstack/react-query";
import fetchCarts from "../api/fetchCarts";
import type { Cart } from "../lib/types";



export default function useCarts() {
    return useQuery<Cart[]>({
        queryKey: ['carts'],
        queryFn: fetchCarts
    })
}



