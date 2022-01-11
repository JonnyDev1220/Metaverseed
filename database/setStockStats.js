// Metaverse Symbol Array use as slug to fetch()
const StocksSym = [
  "AAPL",
  "RBLX",
  "FB",
  "MSFT",
  "NVDA",
  "GOOGL",
  "AMZN",
  "ADSK",
  "FSLY",
  "U",
  "QCOM",
  "MTTR",
  "IMMR",
  "TCEHY",
];

const apiKey = "F61TQ107K5G02F7R";

export const getStock = async () => {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=${apiKey}`
  );
  const data = res.json();
  return data;
};

// will need to use lib Puppeteer to scrape data from website : companiesmarketcap.com

// Object model for Stock data
const StockArray = [
  {
    name: "",
    logo: "",
    marketCap: "",
    price: "",
    Change30D: "",
  },
];
