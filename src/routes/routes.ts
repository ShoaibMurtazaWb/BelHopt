// routes.ts
export const ROUTES = {
  HOME: "/",
  PRODUCT_DETAIL: (id: number | string) => `/product/${id}`,
  CATEGORY: (category: string) => `/category/${category}`,
  CART: "/cart",
  CHECKOUT: "/checkout",
};
