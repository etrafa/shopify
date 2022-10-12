import { createSlice } from "@reduxjs/toolkit";

interface CurrencyState {
  isCurrencyModalOpen: boolean;
  currentCurrency: string;
}

const initialState: CurrencyState = {
  currentCurrency: "USD",
  isCurrencyModalOpen: false,
};

const currencySlicer = createSlice({
  name: "currency",
  initialState: initialState,
  reducers: {
    TOGGLE_CURRENCY_MODAL: (state) => {
      if (state.isCurrencyModalOpen) {
        state.isCurrencyModalOpen = false;
      } else {
        state.isCurrencyModalOpen = true;
      }
    },
    SET_CURRENT_CURRENCY: (state, action) => {
      state.currentCurrency = action.payload;
    },
  },
});

export default currencySlicer.reducer;
export const { TOGGLE_CURRENCY_MODAL, SET_CURRENT_CURRENCY } =
  currencySlicer.actions;
