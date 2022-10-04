import { createSlice } from "@reduxjs/toolkit";
import { ISingleProductForCart } from "../../interfaces/SingleProductForCart";

interface CartState {
  value: ISingleProductForCart;
}

const initialState: CartState = {
  value: {
    tshirtName: "",
    id: "",
    leauge: "",
    amount: 1,
    price: 0,
    size: "S",
    frontSmall: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      state.value = { ...payload };
    },
    increaseQuantity: (state) => {
      state.value.amount = state.value.amount + 1;
      if (state.value.amount >= 10) {
        state.value.amount = 10;
      }
    },
    decreaseQuantity: (state) => {
      state.value.amount = state.value.amount - 1;
      if (state.value.amount < 1) {
        state.value.amount = 1;
      }
    },
    changeSize: (state, { payload }) => {
      const selectedSize = payload;
      state.value.size = selectedSize;
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, increaseQuantity, decreaseQuantity, changeSize } =
  cartSlice.actions;
