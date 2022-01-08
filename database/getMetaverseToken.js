// Get Metaverse Token Data
export const getMetaverseToken = async () => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=metaverse&order=market_cap_desc&per_page=250`
  );
  const data = await res.json();
  return data;
};
