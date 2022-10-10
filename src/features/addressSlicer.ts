import { createSlice } from "@reduxjs/toolkit";

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

export default addressSlicer.reducer;
