import { db } from "../firebase/clientApp";
import { doc, getDoc } from "@firebase/firestore";

const getNftStats = async () => {
  const docRef = doc(db, "Market", "NFT");
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data;
};

export default getNftStats;
