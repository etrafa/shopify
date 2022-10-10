import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { string } from "yup";
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

export const addUserAddress = createAsyncThunk(
  "add/userAddress",
  async (
    { userID, address }: { userID: string; address: AddressProps },
    { rejectWithValue }
  ) => {
    const docRef = collection(db, "users", userID, "address");
    try {
      await addDoc(docRef, { ...address });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteUserAddress = createAsyncThunk(
  "delete/userAddress",
  async (
    { userID, addressID }: { userID: string; addressID: string },
    { rejectWithValue }
  ) => {
    const docRef = doc(db, "users", userID, "address", addressID);
    try {
      await deleteDoc(docRef);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export default addressSlicer.reducer;
