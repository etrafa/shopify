import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { ISingleProductForCart } from "../../interfaces/SingleProductForCart";
import { db, useAuth } from "../firabaseConfig";

export const ADD_ITEM_TO_DB = async (
  item: ISingleProductForCart,
  userID: string
) => {
  const collectionRef = doc(db, "users", userID, "cart", `${item.id}`);
  try {
    const res = await setDoc(collectionRef, { ...item });
  } catch (err: any) {
    throw new Error(err);
  }
};
