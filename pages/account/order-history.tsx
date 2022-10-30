import Head from "next/head";
import OrderHistoryMain from "../../components/OrderHistory";

const OrderHistory = () => {
  return (
    <div className="w-full mt-14 min-h-[50vh]">
      <Head>
        <title>Order History - EL FOOTBALL STORE</title>
      </Head>
      <OrderHistoryMain />
    </div>
  );
};
export default OrderHistory;
