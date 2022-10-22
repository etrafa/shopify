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

export interface AddressProps {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  id: string;
  country: string;
}

interface AddressState {
  addressList: AddressProps[];
  singleAddress: AddressProps;
  isNewAddressOpen: boolean;
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
    id: "",
    country: "",
  },
  isNewAddressOpen: false,
};

const addressSlicer = createSlice({
  name: "address",
  initialState: initialState,
  reducers: {
    ADD_USER_ADDRESS: (state, action) => {
      state.addressList.push(action.payload);
    },
    DELETE_USER_ADDRESS: (state, action) => {
      const addressID = action.payload;
      state.addressList = state.addressList.filter(
        (address) => address.id !== addressID
      );
    },
    OPEN_NEW_ADDRESS: (state) => {
      state.isNewAddressOpen = true;
    },
    CLOSE_NEW_ADDRESS: (state) => {
      state.isNewAddressOpen = false;
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

export const {
  ADD_USER_ADDRESS,
  OPEN_NEW_ADDRESS,
  CLOSE_NEW_ADDRESS,
  DELETE_USER_ADDRESS,
} = addressSlicer.actions;

export default addressSlicer.reducer;
