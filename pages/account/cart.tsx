import Head from "next/head";
import { useEffect, useState } from "react";

import CartFormBody from "../../components/Layouts/Cart/CartFormBody";
import CartFormHeader from "../../components/Layouts/Cart/CartFormHeader";
import CartHeader from "../../components/Layouts/Cart/CartHeader";
import NoItemFound from "../../components/Layouts/Cart/NoItemFound";
import SubTotal from "../../components/Layouts/Cart/SubTotal";
import { useAuth } from "../../firebase/firabaseConfig";
import { getCartItems } from "../../src/features/cartSlicer";
import { useAppDispatch, useAppSelector } from "../../src/store";

const Cart = () => {
  const currentUser = useAuth();
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((store) => store.cart);

  useEffect(() => {
    if (currentUser) {
      dispatch(getCartItems(currentUser?.uid));
    }
  }, [dispatch, currentUser]);

  return (
    <div className="w-full mt-14 lg:mb-40 min-h-[50vh]">
      <Head>
        <title>My Cart - EL FOOTBALL STORE</title>
      </Head>
      {cartItems.length === 0 && <NoItemFound />}
      {cartItems && cartItems.length > 0 && (
        <>
          <CartHeader />
          <form className="mt-12 max-w-screen-lg md:mx-auto">
            <CartFormHeader />
            {cartItems &&
              cartItems.map((item) => {
                return <CartFormBody key={item.id} {...item} />;
              })}
            <SubTotal />
          </form>
        </>
      )}
    </div>
  );
};
export default Cart;
