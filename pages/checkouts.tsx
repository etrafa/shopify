import Head from "next/head";
import CheckoutLeft from "../components/Checkout/CheckoutLeft/CheckoutLeft";
import CheckoutRight from "../components/Checkout/CheckoutRight/CheckoutRight";

const checkout = () => {
  return (
    <div className="w-full mx-auto flex min-h-[80vh] mt-10">
      <Head>
        <title>Checkout - EL FOOTBALL STORE</title>
      </Head>
      <CheckoutLeft />
      <CheckoutRight />
    </div>
  );
};
export default checkout;
