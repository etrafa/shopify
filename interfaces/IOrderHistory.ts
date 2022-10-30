import { ISingleProductForCart } from "./SingleProductForCart";

export interface IOrderHistory {
  cartItems: ISingleProductForCart[];
  createdAt: {
    nanoseconds: number;
    seconds: number;
  };
}
