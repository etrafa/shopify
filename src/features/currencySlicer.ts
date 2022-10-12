import { createSlice } from "@reduxjs/toolkit";

interface CurrencyState {
  isCurrencyModalOpen: boolean;
  currentCurrency: string;
  isCurrencyWarningOpen: boolean;
}

const initialState: CurrencyState = {
  currentCurrency: "USD",
  isCurrencyModalOpen: false,
  isCurrencyWarningOpen: true,
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
    OPEN_CURRENCY_WARNING: (state) => {
      state.isCurrencyWarningOpen = true;
    },
    CLOSE_CURRENCY_WARNING: (state) => {
      state.isCurrencyWarningOpen = false;
    },
  },
});

export default currencySlicer.reducer;
export const {
  TOGGLE_CURRENCY_MODAL,
  SET_CURRENT_CURRENCY,
  OPEN_CURRENCY_WARNING,
  CLOSE_CURRENCY_WARNING,
} = currencySlicer.actions;
