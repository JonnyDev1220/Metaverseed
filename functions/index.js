const functions = require("firebase-functions");
const fetch = require("node-fetch");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
const news = db.collection("News").doc("Metaverse");

// const db = admin.firestore();

exports.metaverseNewsUpdate = functions
  .region("europe-west1")
  .pubsub.schedule("* * * * *")
  .onRun((context) => {
    async function getNews() {
      const res = await fetch(
        "https://newsapi.org/v2/everything?q=metaverse&language=en&apiKey=03bae464238c4f28b4c647c9352b2af9"
      );
      const data = await res.json();

      await news.update({ articles: [data] });
    }
  });
