import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_DATABASE_URL,
  projectId: process.env.NEXT_PROJECT_ID,
  storageBucket: process.env.NEXT_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_APP_ID,
};

//initilizae firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
