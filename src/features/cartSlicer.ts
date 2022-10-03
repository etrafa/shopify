import { createSlice } from "@reduxjs/toolkit";
import { ISingleProductForCart } from "../../interfaces/SingleProductForCart";

interface CartState {
  cartItems: ISingleProductForCart[];
  amount: number;
  size: string;
}

const initialState: CartState = {
  cartItems: [],
  amount: 1,
  size: "S",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      state.cartItems = [...state.cartItems, payload];
    },
    increaseQuantity: (state) => {
      state.amount = state.amount + 1;
      if (state.amount >= 10) {
        state.amount = 10;
      }
    },
    decreaseQuantity: (state) => {
      state.amount = state.amount - 1;
      if (state.amount < 1) {
        state.amount = 1;
      }
    },
    changeSize: (state, { payload }) => {
      const selectedSize = payload;
      state.size = selectedSize;
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, increaseQuantity, decreaseQuantity, changeSize } =
  cartSlice.actions;
