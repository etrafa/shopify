import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { MouseEvent } from "react";
import { db, useAuth } from "../../../firebase/firabaseConfig";
import { useAppSelector } from "../../../src/store";
import Router from "next/router";

const BuyButton = () => {
  const { cartItems } = useAppSelector((store) => store.cart);
  const currentUser = useAuth();

  const handleBuy = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (currentUser) {
      await addDoc(collection(db, "users", currentUser.uid, "order__history"), {
        cartItems,
      });
      cartItems.map(async (item) => {
        const docRef = doc(db, "users", currentUser.uid, "cart", item.id);
        try {
          await deleteDoc(docRef);
          Router.push("/purchase_success");
        } catch (err) {
          console.log(err);
        }
      });
    }
  };

  return (
    <button
      onClick={handleBuy}
      type="submit"
      className="border w-44 h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text mt-6 float-right"
    >
      Buy
    </button>
  );
};
export default BuyButton;
