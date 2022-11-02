import { AddressProps } from "../src/features/addressSlicer";
import { ISingleProductForCart } from "./SingleProductForCart";

export interface IOrderHistory {
  cartItems: ISingleProductForCart[];
  createdAt: {
    nanoseconds: number;
    seconds: number;
  };
  id?: string;
  address: AddressProps;
  discount: number;
  boughtCurrency: string;
}
