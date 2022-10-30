import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, useAuth } from "../../firebase/firabaseConfig";
import { ISingleProductForCart } from "../../interfaces/SingleProductForCart";

const OrderHistoryMain = () => {
  const currentUser = useAuth();

  const [orderHistory, setOrderHistory] = useState<
    ISingleProductForCart[] | null
  >(null);

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

  console.log(orderHistory);

  return <div>hey</div>;
};
export default OrderHistoryMain;
