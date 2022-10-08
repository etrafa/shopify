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
  reducers: {},
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
