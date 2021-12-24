import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import firebase from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7oUMyANsrmDzWfVAjMWVRv7i1mBVBa_w",
  authDomain: "metabazar-c4a47.firebaseapp.com",
  databaseURL:
    "https://metabazar-c4a47-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "metabazar-c4a47",
  storageBucket: "metabazar-c4a47.appspot.com",
  messagingSenderId: "393533803822",
  appId: "1:393533803822:web:bb0def5349ff585e777ebf",
  measurementId: "G-8FJFVQF4ZB",
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseapp);

// const analytics = getAnalytics(app);
