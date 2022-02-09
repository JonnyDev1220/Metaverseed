const functions = require("firebase-functions");
const fetch = require("node-fetch");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
const news = db.collection("News").doc("Metaverse");
const stock = db.collection("Market").doc("Stocks");
const puppeteer = require("puppeteer");

// Scraping function for metaverse related news
async function getNews() {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=metaverse&language=en&apiKey=03bae464238c4f28b4c647c9352b2af9"
  );
  const data = await res.json();
  return data;
}

// CronJobs for News Scraper
exports.metaverseNewsUpdate = functions
  .region("europe-west1")
  .pubsub.schedule("every 1 hours")
  .onRun(async (context) => {
    const data = await getNews();

    await news.update({ articles: [data] });
  });

// Scraping function for Stocks
async function stockScraper() {
  // stock name for link page url
  const stocksNames = [
    "apple",
    "roblox",
    "facebook",
    "microsoft",
    "nvidia",
    "alphabet-google",
    "amazon",
    "autodesk",
    "fastly",
    "qualcomm",
    "matterport",
    "immersion-corp",
    "tencent",
    "activision-blizzard",
    "ubisoft",
    "unity-software",
    "nike",
    "walt-disney",
    "shopify",
    "coinbase",
  ];

  const stockArray = [];

  // Launch puppeteer
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  // Foreach page scrape the data needed

  for (let stock of stocksNames) {
    await page.goto(`https://companiesmarketcap.com/${stock}/marketcap/`);

    // Scrape Stock Name
    const name = await page.$eval(
      ".company-name",
      (element) => element.textContent
    );

    // Scrape Market Cap
    const marketCap = await page.$eval(
      "#cmkt > div.table-container > div.row > div.col-lg-6 > div:nth-child(1) > div:nth-child(2) > div.line1",
      (element) => element.innerHTML
    );

    // Scrape Price
    const price = await page.$eval(
      "#cmkt > div.table-container > div.row > div.col-lg-6 > div:nth-child(2) > div:nth-child(1) > div.line1",
      (element) => element.innerHTML
    );

    // Scrape symbol
    const symbol = await page.$eval(
      ".company-code",
      (element) => element.textContent
    );

    // Scrape Daily Change percent
    const dailyChange = await page.$eval(
      "#cmkt > div.table-container > div.row > div.col-lg-6 > div:nth-child(2) > div:nth-child(2) > div.line1 > span",
      (element) => element.innerHTML
    );

    stockArray.push({ name, symbol, price, marketCap, dailyChange });
  }
  browser.close();

  return stockArray;
}

// CronJobs for Stock Scraper
exports.stockDataUpdate = functions
  .runWith({ timeoutSeconds: 60, memory: "1GB" })
  .region("europe-west1")
  .pubsub.schedule("every 3 hours")
  .onRun(async (context) => {
    const stockData = await stockScraper();
    await stock.update({ stock: stockData });
  });
