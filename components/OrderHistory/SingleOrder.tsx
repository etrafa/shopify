import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db, useAuth } from "../../firebase/firabaseConfig";
import { IOrderHistory } from "../../interfaces/IOrderHistory";

const SingleOrder = () => {
  const currentUser = useAuth();
  const params = useRouter();
  const [singleOrder, setSingleOrder] = useState<IOrderHistory | null>(null);

  useEffect(() => {
    const orderID = params.query.id;

    const fetchSingleOrder = async () => {
      if (currentUser && orderID) {
        const singleOrderRef = doc(
          db,
          "users",
          currentUser.uid,
          "order__history",
          `${orderID}`
        );

        const res = await getDoc(singleOrderRef);

        const data = { ...res.data(), id: res.id } as IOrderHistory;

        setSingleOrder(data);
      }
    };

    fetchSingleOrder();
  }, [currentUser, params.query.id]);

  return (
    <div className="min-h-[50vh] max-w-screen-lg mx-auto">
      <h1 className="text-border text-2xl font-bold my-8">Order Details</h1>
      <div className=" bg-light-gray w-11/12 lg:w-full h-96 rounded-md shadow-md shadow-slate-50">
        {singleOrder &&
          singleOrder.cartItems.map((item) => (
            <div key={item.id} className="w-full h-12 bg-blue-200">
              <p>
                {item.amount}x {item.tshirtName}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
export default SingleOrder;
