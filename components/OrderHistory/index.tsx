import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, useAuth } from "../../firebase/firabaseConfig";
import { IOrderHistory } from "../../interfaces/IOrderHistory";
import AllOrderHistory from "./AllOrderHistory";

const OrderHistoryMain = () => {
  const currentUser = useAuth();

  const [orderHistory, setOrderHistory] = useState<IOrderHistory[] | null>(
    null
  );

  useEffect(() => {
    const getOrderHistoryData = async () => {
      if (currentUser) {
        const orderHistoryRef = collection(
          db,
          "users",
          currentUser?.uid,
          "order__history"
        );

        const res = await getDocs(orderHistoryRef);

        const data = res.docs.map((order: DocumentData) => {
          return {
            ...order.data(),
            id: order.id,
          };
        });

        setOrderHistory(data);
      }
    };

    getOrderHistoryData();
  }, [currentUser]);

  return (
    <>
      <h1 className="font-bold text-2xl text-button-text text-center">
        Order History
      </h1>
      {orderHistory &&
        orderHistory.map((item) => <AllOrderHistory key={item.id} {...item} />)}
    </>
  );
};
export default OrderHistoryMain;
