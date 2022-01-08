import * as json from "./data.json";
import { setDoc, doc } from "@firebase/firestore";
import { db } from "../firebase/clientApp";

// POST DATA into Metaverse Stats Collection
const pushArrayToDatabase = async (data) => {
  const obj = { ...data };
  //  Add a new document in collection "cities"
  await setDoc(doc(db, "MetaverseStats", "Stats"), obj);
};

// Create metaverse Array with name and slug
export const firstMetaverseStatsArray = () => {
  let array = [];
  let metaverseList = json;

  metaverseList.virtualworld.forEach((element) => {
    array.push({ name: element.node.name, slug: element.node.slug });
  });
  return array;
};

// PUSH Stats From OPENSEA API to firstArray
export const setNFTArray = async (array) => {
  array.forEach(async (element) => {
    const options = { method: "GET", headers: { Accept: "application/json" } };
    const res = await fetch(
      `https://api.opensea.io/api/v1/collection/${element.slug}/stats`,
      options
    );
    const data = await res.json();
    element.stats = data;
  });

  return array;
};
