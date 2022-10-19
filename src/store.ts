import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

//reducers
import cartReducer from "./features/cartSlicer";
import addressReducer from "./features/addressSlicer";
import currencyReducer from "./features/currencySlicer";
import navbarReducer from "./features/navbarSlicer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    address: addressReducer,
    currency: currencyReducer,
    navbar: navbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
