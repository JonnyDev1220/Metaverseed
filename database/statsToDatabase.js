import * as json from "./data.json";
import { setDoc, doc } from "@firebase/firestore";
import { db } from "../firebase/clientApp";

let statsToPush = [];

// // POST DATA into Metaverse Stats Collection
const serveDatabaseWithDATA = async (data) => {
  //  Add a new document in collection "cities"
  await setDoc(doc(db, "MetaverseStats", "Stats"), data);
};

export const firstMetaverseStatsArray = (array) => {
  let metaverseList = json;

  metaverseList.virtualworld.forEach((element) => {
    array.push({ name: element.node.name, slug: element.node.slug });
  });
};

export const pushMetaverseStats = async (array) => {
  array.forEach(async (element) => {
    const options = { method: "GET", headers: { Accept: "application/json" } };
    const res = await fetch(
      `https://api.opensea.io/api/v1/collection/${element.slug}/stats`,
      options
    );
    const data = await res.json();
    element.stats = data;
  });
  console.log(array);
  serveDatabaseWithDATA(array);
};

firstMetaverseStatsArray(statsToPush);
// pushMetaverseStats(statsToPush);
