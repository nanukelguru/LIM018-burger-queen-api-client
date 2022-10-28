import { Product } from "../../product/product-interface";

export interface Order {
  _id: string;
  products: ProductsOrders[];
  total:number;
}

export interface ProductsOrders {
  qty:number,
  productId: Product
}

