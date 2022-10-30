import Head from "next/head";
import OrderHistoryMain from "../../components/OrderHistory";

const OrderHistory = () => {
  return (
    <div className="w-full mt-14 min-h-[50vh]">
      <Head>
        <title>Order History - EL FOOTBALL STORE</title>
      </Head>
      {/* <h1 className="text-border text-2xl font-bold text-zinc-700 text-center">
        Order History
      </h1>
      <p>{"You haven't placed any orders yet."}</p> */}
      <OrderHistoryMain />
    </div>
  );
};
export default OrderHistory;
