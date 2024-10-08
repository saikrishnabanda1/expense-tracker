import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcLrnm7AbExSNQAKZ6GchMz1a2yEQq7sY",
  authDomain: "expense-tracker-2110b.firebaseapp.com",
  projectId: "expense-tracker-2110b",
  storageBucket: "expense-tracker-2110b.appspot.com",
  messagingSenderId: "1000212541107",
  appId: "1:1000212541107:web:822224ee182f4725e30ac6",
  measurementId: "G-GP0VH52LV4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
