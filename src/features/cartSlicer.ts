import { createSlice } from "@reduxjs/toolkit";
import { ISingleProductForCart } from "../../interfaces/SingleProductForCart";

interface CartState {
  cartItems: ISingleProductForCart[];
  amount: number;
  total: number;
}

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      state.cartItems = [...state.cartItems, payload];
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart } = cartSlice.actions;
