import Link from "next/link";
import { IOrderHistory } from "../../interfaces/IOrderHistory";

interface OrderHistoryTableProps {
  orderHistory: IOrderHistory[];
}

const OrderHistoryTable = ({ orderHistory }: OrderHistoryTableProps) => {
  console.log(orderHistory);

  return (
    <div className="overflow-x-auto relative  sm:rounded-lg max-w-screen-lg mx-auto">
      <h1 className="text-border text-2xl font-bold my-8">Order History</h1>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Order no
            </th>
            <th scope="col" className="py-3 px-6">
              Order date
            </th>
            <th scope="col" className="py-3 px-6">
              Order amount
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orderHistory &&
            orderHistory.map((order) => {
              const orderDate = new Date(order.createdAt.seconds * 1000)
                .toDateString()
                .slice(3);

              let totalAmount = 0;
              order.cartItems.map((item) => {
                totalAmount += item.price;
              });

              const SINGLE_ORDER_ID = order.id;

              return (
                <tr
                  key={order.createdAt.seconds}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td className="py-12 px-6">
                    {Math.round(Math.random() * 1000000)}
                  </td>
                  <td className="py-12 px-6">{orderDate}</td>
                  <td className="py-12 px-6">${totalAmount}</td>
                  <td className="py-12 px-6">
                    <Link href={`/account/order-history/${SINGLE_ORDER_ID}`}>
                      <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                        View details
                      </span>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default OrderHistoryTable;
