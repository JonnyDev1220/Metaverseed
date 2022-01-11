import { db } from "../firebase/clientApp";
import { doc, setDoc } from "firebase/firestore";

// Set Metaverse News in DATABASE
const setMetanews = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=metaverse&language=en&apiKey=157da80ba37141a08d331bf7392f428e"
  );
  const data = await res.json();
  await setDoc(doc(db, "News", "Metaverse"), data);
};

export default setMetanews;
