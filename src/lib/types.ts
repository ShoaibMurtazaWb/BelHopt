//======================== Product relted interfaces start here
export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface ProductReview {
  rating: number;
  comment: string;
  date: string; // ISO string
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductMeta {
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
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

//======================== Product relted interfaces start here

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


// ======================= Cart Interface
export interface CartItem {
  id: number;
  title: string;
  thumbnail: string;
  sku: string;
  price: number;
  quantity: number;
}
// ======================= Cart Interface that can be shared across whole app

export interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  totalItems: number;
}
