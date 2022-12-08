import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDBK6IqzVEml_DWrxm5wAyLbkONPL9em38",
  authDomain: "webtechhomework4.firebaseapp.com",
  projectId: "webtechhomework4",
  storageBucket: "webtechhomework4.appspot.com",
  messagingSenderId: "181544091593",
  appId: "1:181544091593:web:aa5911b2152f7052c07218",
  measurementId: "G-8D3GV4VX1H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);

export const auth = getAuth(app);