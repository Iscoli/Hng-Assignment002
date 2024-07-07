// src/types.ts
export interface Product {
  name: string;
  amount: number;
  discount: number;
  rating: number;
  percentage: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
