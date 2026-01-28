import type { Category } from "../lib/types";
import api from "./axios";

export async function fetchCategories() {
  const { data } = await api.get<Category[]>("/products/categories");
  return data;
}
