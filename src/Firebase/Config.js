import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwxnWTc1yozOWNOTtgmTaFSXYtQsDHEMI",
  authDomain: "post-app-442ff.firebaseapp.com",
  projectId: "post-app-442ff",
  storageBucket: "post-app-442ff.appspot.com",
  messagingSenderId: "500637831852",
  appId: "1:500637831852:web:2b5aa50263b1c532d08509",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
