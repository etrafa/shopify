import Head from "next/head";
import Checkout from "../components/Checkout/Checkout";

const checkout = () => {
  return (
    <div>
      <Head>
        <title>Checkout - EL FOOTBALL STORE</title>
      </Head>
      <Checkout />
    </div>
  );
};
export default checkout;
