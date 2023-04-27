import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {

  //you firebase config
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseapp);

// const analytics = getAnalytics(app);
