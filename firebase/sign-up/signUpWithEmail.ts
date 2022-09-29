//*create new user with Email
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firabaseConfig";

export const signUpWithEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  let userName = firstName + " " + lastName;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: userName });

      const userID = auth.currentUser.uid;

      await setDoc(doc(db, "users", userID), {});
    }
  } catch (err) {
    console.log(err);
  }
};
