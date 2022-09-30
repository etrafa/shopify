//*LOGOUT FROM SERVER
import { signOut } from "firebase/auth";
import { auth } from "../firabaseConfig";

export const firebaseLogout = async () => {
  await signOut(auth);
};
