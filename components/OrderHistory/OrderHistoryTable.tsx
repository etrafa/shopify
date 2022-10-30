const OrderHistoryTable = () => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg max-w-screen-lg mx-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td className="py-4 px-6">12345</td>
            <td className="py-4 px-6">10.30.22</td>
            <td className="py-4 px-6">$1320</td>
            <td className="py-4 px-6">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                View details
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default OrderHistoryTable;
