//*LOGOUT FROM SERVER
import { signOut } from "firebase/auth";
import { auth } from "../firabaseConfig";

export const firebaseLogout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};
