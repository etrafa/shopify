import { addDoc, collection } from "firebase/firestore";
import { ISingleProductForCart } from "../../interfaces/SingleProductForCart";
import { db, useAuth } from "../firabaseConfig";

export const ADD_ITEM_TO_DB = async (item: ISingleProductForCart) => {
  const currentUser = useAuth();
  const currentUserID = currentUser?.uid;
  const collectionRef = collection(db, "users", `${currentUserID}`, "cart");
  const res = await addDoc(collectionRef, { ...item });
};
