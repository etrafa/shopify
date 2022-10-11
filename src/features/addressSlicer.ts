import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
} from "firebase/firestore";
import { string } from "yup";
import { db } from "../../firebase/firabaseConfig";

interface AddressProps {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

interface AddressState {
  addressList: AddressProps[];
  singleAddress: AddressProps;
}

const initialState: AddressState = {
  addressList: [],
  singleAddress: {
    address: "",
    city: "",
    firstName: "",
    lastName: "",
    phone: "",
    state: "",
    zipCode: "",
  },
};

const addressSlicer = createSlice({
  name: "address",
  initialState: initialState,
  reducers: {
    ADD_USER_ADDRESS: (state, action) => {
      state.addressList.push(action.payload);
    },
  },

  extraReducers(builder) {
    builder.addCase(getUserAddress.fulfilled, (state, action) => {
      state.addressList = action.payload;
    });
  },
});

export const getUserAddress = createAsyncThunk(
  "get/userAdress",
  async (userID: string, { rejectWithValue }) => {
    try {
      const addressRef = collection(db, "users", userID, "address");
      const res = await getDocs(addressRef);
      const data = res.docs.map((address: DocumentData) => {
        return { ...address.data(), id: address.id };
      });

      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
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

export const { ADD_USER_ADDRESS } = addressSlicer.actions;

export default addressSlicer.reducer;
