//Get Global CryptoCurrency Market Cap

export const getGlobalStats = async () => {
  const res = await fetch("https://api.coingecko.com/api/v3/global");
  const data = await res.json();
  return data;
};
