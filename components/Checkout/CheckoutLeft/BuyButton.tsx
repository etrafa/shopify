import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { MouseEvent, useState } from "react";
import { db, useAuth } from "../../../firebase/firabaseConfig";
import { useAppSelector } from "../../../src/store";
import Router from "next/router";
import { AddressProps } from "../../../src/features/addressSlicer";

interface BuyButtonProps {
  currentAddress: AddressProps;
}

const BuyButton = ({ currentAddress }: BuyButtonProps) => {
  const { cartItems, discount } = useAppSelector((store) => store.cart);
  const currentUser = useAuth();
  const [buyError, setBuyError] = useState("");

  const handleBuy = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const {
      address,
      city,
      country,
      firstName,
      lastName,
      phone,
      state,
      zipCode,
    } = currentAddress;

    if (
      address.length < 1 ||
      city.length < 1 ||
      country.length < 1 ||
      firstName.length < 1 ||
      lastName.length < 1 ||
      phone.length < 1 ||
      state.length < 1 ||
      zipCode.length < 1
    )
      return setBuyError("Please fill all the area.");
    else {
      if (currentUser) {
        await addDoc(
          collection(db, "users", currentUser.uid, "order__history"),
          {
            cartItems,
            createdAt: serverTimestamp(),
            address: currentAddress,
            discount: discount,
          }
        );
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
    }
  };

  return (
    <>
      {buyError && (
        <p className="text-main-red py-4 text-right font-semibold text-md">
          {buyError}
        </p>
      )}
      <button
        onClick={handleBuy}
        type="submit"
        className="border w-44 h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text mt-6 float-right"
      >
        Buy
      </button>
    </>
  );
};
export default BuyButton;
