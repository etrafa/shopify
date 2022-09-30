import { signInWithEmailAndPassword } from "firebase/auth";
import { NextRouter } from "next/router";
import { auth } from "../firabaseConfig";

//*LOGIN WITH EMAIL
export const firebaseSignIn = async (
  email: string,
  password: string,
  redirect: NextRouter,
  displayErrorMessage?: React.Dispatch<React.SetStateAction<boolean>>,
  errMessage?: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    redirect.push("/");
  } catch (err: any) {
    if (displayErrorMessage && errMessage) {
      displayErrorMessage(true);
      if (err.code === "auth/user-not-found") errMessage("User not found.");
      else if (err.code === "auth/wrong-password") errMessage("Wrong password");
      else errMessage("An unexpected error happened. Please later try again.");
    }
  }
};
