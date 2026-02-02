//======================== Product related interfaces start here
export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}

//======================== Product related interfaces start here

export interface Category {
  slug: string;
  name: string;
  url: string;
}

export interface PaginatedProducts {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

// Cart Interface that can be shared across whole app
export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  totalItems: number;
  removeItem: (id: number) => void;
}

// ======================= Cart Interface
// Product inside a cart

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface CartComponentProps {
  cart: Cart;
}

// Single cart
export interface Cart {
  id: number;
  products: CartItem[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

// API response wrapper
export interface CartsResponse {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}

// Auth User
export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}
