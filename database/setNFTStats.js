import * as collectionArray from "../database/nftCollectionArray";
import { setDoc, doc, updateDoc, arrayUnion } from "@firebase/firestore";
import { db } from "../firebase/clientApp";

// Post Name Slug logoUrl NFTcollection
let nftRef = doc(db, "Market", "NFT");

// push full NFT element in nftStats array in firestore
export const pushNFTStatstoDatabase = async (element) => {
  const options = { method: "GET", headers: { Accept: "application/json" } };
  const res = await fetch(
    `https://api.opensea.io/api/v1/collection/${element.slug}/stats`,
    options
  );
  const data = await res.json();
  element.stats = data;
  await updateDoc(nftRef, {
    nftStats: arrayUnion(element),
  });
};
