import { doc, updateDoc } from "firebase/firestore";
import { ISingleProductForCart } from "../../interfaces/SingleProductForCart";
import { db } from "../firabaseConfig";

export const UPDATE_CART_PRODUCT_AMOUNT = async (
  userID: string,
  item: ISingleProductForCart,
  amount: number
) => {
  const docRef = doc(db, "users", userID, "cart", `${item.id}`);

  try {
    await updateDoc(docRef, { ...item, amount: amount });
  } catch (err: any) {
    throw new Error(err);
  }
};
