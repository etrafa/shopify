import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firabaseConfig";

interface AddressProps {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  states: string;
  zipCode: string;
  phone: string;
}

interface AddressState {
  addressList: AddressProps[] | null;
}

const initialState: AddressState = { addressList: [] };

const addressSlicer = createSlice({
  name: "address",
  initialState: initialState,
  reducers: {},
});

export const getUserAddress = createAsyncThunk(
  "get/userAdress",
  async (userID: string, { rejectWithValue }) => {
    const cartRef = collection(db, "users", userID, "address");
    const res = await getDocs(cartRef);
    const data = res.docs.map((address) => {
      return { ...address.data(), id: address.id };
    });
  }
);

export default addressSlicer.reducer;
