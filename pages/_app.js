import "../styles/global.scss";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="mNVRpFqr6T7komLo9o4B6rbpobGDQp5Bu3eGN8SQ"
      serverUrl="https://lyvamsq2ago1.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />;
    </MoralisProvider>
  );
}

export default MyApp;
