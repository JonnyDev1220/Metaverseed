import { db } from "../firebase/clientApp";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

// Set Metaverse News in DATABASE

async function setMetanews() {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=metaverse&language=en&sortBy=popularity&apiKey=03bae464238c4f28b4c647c9352b2af9"
  );
  const data = await res.json();
  const metaNewsRef = doc(db, "News", "Metaverse");

  data.articles.map(async (element) => {
    //  add a new article to the "articles" array field.
    await updateDoc(metaNewsRef, {
      articles: arrayUnion(element),
    });
  });
}

export default setMetanews;
