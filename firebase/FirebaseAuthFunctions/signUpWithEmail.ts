//*create new user with Email
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { NextRouter } from "next/router";
import React, { SetStateAction } from "react";
import { auth, db } from "../firabaseConfig";

export const signUpWithEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  statusMessage: React.Dispatch<React.SetStateAction<string>>,
  router: NextRouter
) => {
  let userName = firstName + " " + lastName;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: userName });

      const userID = auth.currentUser.uid;

      await setDoc(doc(db, "users", userID), {});

      statusMessage("Account has been created successfully.");

      setTimeout(() => {
        router.push("/");
      }, 2500);
    }
  } catch (err: any) {
    console.log(err);
    statusMessage("An error happened. Please try again");
  }
};
