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


export interface Product {
  name: string;
  image: string;
  amount: number;
  discount: number;
  percentage: string;
  rating: number;
}

export interface LikedItem extends Product {
  liked: boolean;
}