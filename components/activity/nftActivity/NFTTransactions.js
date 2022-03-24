import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import moment from "moment";

const NFTTransactions = ({ collectionAssets }) => {
  const [address, setAddress] = useState();
  const [sevenDays, setSevenDays] = useState([]);
  const { isInitialized } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  const getTransfers = async (address) => {
    const options = {
      address: address,
      chain: "eth",
      // from_date: moment().subtract(7, "days"),
      // to_date: moment(),
      // limit: 10,
    };

    // const nftTrades = await Web3Api.token.getNFTTrades(options);
    const nftTransfert = await Web3Api.token.getContractNFTTransfers(options);
    console.log(nftTransfert);

    // setSevenDays(nftTrades.result);
  };

  useEffect(() => {
    if (isInitialized) {
      getTransfers(address);
    }
  }, [address]);

  return (
    <div>
      <select
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      >
        {/* Selection option dynamics  element */}
        {collectionAssets.map((element) => {
          if (element.symbol == "") {
            return (
              <option value={element.address} key={element.address}>
                misc
              </option>
            );
          }
          return (
            <option value={element.address} key={element.address}>
              {element.symbol}
            </option>
          );
        })}
      </select>
      <div>
        <h1>Last 7 Days Sales</h1>
        {/* {sevenDays.map((element) => {
          return <div>{element.price}</div>;
        })} */}
      </div>
    </div>
  );
};

export default NFTTransactions;

//   const nftTransfers = await Web3Api.token.getContractNFTTransfers(options);
//   nftTrades.result[0].price = Moralis.Units.FromWei(nftTrades.result[0].price);
//   const nftTransaction = await Web3Api.native.getTransactions(options);

//   console.log(nftTransfers);
