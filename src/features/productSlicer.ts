import { createSlice } from "@reduxjs/toolkit";
import { ISingleProductForCart } from "../../interfaces/SingleProductForCart";

interface ProductState {
  value: ISingleProductForCart;
  isCartModalOpen: boolean;
}

const initialState: ProductState = {
  value: {
    tshirtName: "",
    id: "",
    leauge: "",
    amount: 1,
    price: 0,
    size: "S",
    frontLarge: "",
  },
  isCartModalOpen: false,
};

const productSlice = createSlice({
  name: "product",
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
    OPEN_CART_MODAL: (state) => {
      state.isCartModalOpen = true;
    },
    CLOSE_CART_MODAL: (state) => {
      state.isCartModalOpen = false;
    },
  },
});

export default productSlice.reducer;
export const { addItemToCart, increaseQuantity, decreaseQuantity, changeSize } =
  productSlice.actions;
