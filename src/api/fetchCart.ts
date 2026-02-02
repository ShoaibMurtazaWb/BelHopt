import type { CartsResponse } from "../lib/types";
import api from "./axios";

const fetchCart = async (userId?: number) => {
  const { data } = await api.get<CartsResponse>("carts/user/" + userId);
  return data.carts[0] ?? null;
};

export default fetchCart;