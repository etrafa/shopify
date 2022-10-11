import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

//reducers
import productReducer from "./features/productSlicer";
import cartReducer from "./features/cartSlicer";
import addressReducer from "./features/addressSlicer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    address: addressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
