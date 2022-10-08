import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firabaseConfig";
import { ISingleProductForCart } from "../../interfaces/SingleProductForCart";

interface CartState {
  cartItems: ISingleProductForCart[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlicer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    INCREASE_QUANTITY_ON_CART: (state, action) => {
      const productID = action.payload;
      const product = state.cartItems.find((item) => item.id === productID);
      if (product) {
        product.amount = product.amount + 1;
        if (product.amount >= 10) {
          product.amount = 10;
        }
      }
    },

    DECREASE_QUANTITY_ON_CART: (state, action) => {
      const productID = action.payload;
      const product = state.cartItems.find((item) => item.id === productID);
      if (product) {
        product.amount = product.amount - 1;
        if (product.amount <= 1) {
          product.amount = 1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
  },
});

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (userID: string, { rejectWithValue }) => {
    try {
      const cartRef = collection(db, "users", userID, "cart");
      const res = await getDocs(cartRef);
      const data = res.docs.map((cartItem: DocumentData) => {
        return {
          id: cartItem.id,
          ...cartItem.data(),
        };
      });

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export default cartSlicer.reducer;
export const { INCREASE_QUANTITY_ON_CART, DECREASE_QUANTITY_ON_CART } =
  cartSlicer.actions;
