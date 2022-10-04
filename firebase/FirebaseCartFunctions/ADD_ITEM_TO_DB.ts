import { addDoc, collection } from "firebase/firestore";
import { ISingleProductForCart } from "../../interfaces/SingleProductForCart";
import { db, useAuth } from "../firabaseConfig";

export const ADD_ITEM_TO_DB = async (
  item: ISingleProductForCart,
  userID: string
) => {
  const collectionRef = collection(db, "users", userID, "cart");
  try {
    const res = await addDoc(collectionRef, { ...item });
    console.log("added");
  } catch (err) {
    console.log(err);
  }
};
