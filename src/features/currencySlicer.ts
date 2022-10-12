import { createSlice } from "@reduxjs/toolkit";

interface CurrencyProps {
  isCurrencyModalOpen: boolean;
  currentCurrency: string;
}

interface CurrencyState {
  value: CurrencyProps;
}

const initialState: CurrencyState = {
  value: {
    currentCurrency: "USD",
    isCurrencyModalOpen: false,
  },
};

const currencySlicer = createSlice({
  name: "currency",
  initialState: initialState,
  reducers: {},
});

export default currencySlicer.reducer;
