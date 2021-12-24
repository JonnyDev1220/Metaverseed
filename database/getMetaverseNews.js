import { db } from "../firebase/clientApp";
import { doc, getDoc } from "@firebase/firestore";

const getMetanews = async () => {
  const docRef = doc(db, "News", "Metaverse");
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data;
};

export default getMetanews;
