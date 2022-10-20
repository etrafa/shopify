import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firabaseConfig";
import { ISingleProductForCart } from "../../interfaces/SingleProductForCart";

interface CartSlicerState {
  cartItems: ISingleProductForCart[];
  amount: number;
  total: number;
  isCartModalOpen: boolean;
  value: ISingleProductForCart;
}

const initialState: CartSlicerState = {
  amount: 0,
  cartItems: [],
  total: 0,
  isCartModalOpen: false,
  value: {
    amount: 1,
    frontLarge: "",
    id: "",
    leauge: "",
    price: 0,
    size: "S",
    tshirtName: "",
  },
};

const cartSlicerTwo = createSlice({
  name: "cartSlicerTwo",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      state.cartItems = [...state.cartItems, product];
    },

    removeItem: (state, action) => {
      const productID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productID);
    },
    increase: (state) => {
      // const productID = payload;
      // const selectedProduct = state.cartItems.find(
      //   (item) => item.id === productID
      // );

      // if (selectedProduct) {
      //   selectedProduct.amount = selectedProduct.amount + 1;
      // }

      state.value.amount = state.value.amount + 1;
      if (state.value.amount >= 10) {
        state.value.amount = 10;
      }
    },
    decrease: (state) => {
      // const productID = payload;
      // const selectedProduct = state.cartItems.find(
      //   (item) => item.id === productID
      // );

      // if (selectedProduct) {
      //   selectedProduct.amount = selectedProduct.amount - 1;
      // }
      state.value.amount = state.value.amount - 1;
      if (state.value.amount <= 1) {
        state.value.amount = 1;
      }
    },
    calculateTotals: (state) => {
      state.amount = state.cartItems.length;

      let total = 0;

      state.cartItems.forEach((item) => {
        total += item.amount * item.price;
      });

      state.total = total;
    },

    toggleCartModal: (state) => {
      if (state.isCartModalOpen) {
        state.isCartModalOpen = false;
      } else {
        state.isCartModalOpen = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });

    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    });
  },
});

export default cartSlicerTwo.reducer;
export const {
  addItem,
  calculateTotals,
  decrease,
  increase,
  removeItem,
  toggleCartModal,
} = cartSlicerTwo.actions;

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

export const deleteCartItem = createAsyncThunk(
  "delete/productItem",
  async (
    { userID, productID }: { userID: string; productID: string },
    { rejectWithValue }
  ) => {
    const docRef = doc(db, "users", userID, "cart", productID);
    try {
      await deleteDoc(docRef);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
