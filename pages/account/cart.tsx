const Cart = () => {
  return (
    <div className="w-full mt-14 min-h-[50vh]">
      <header>
        <h1 className="text-border text-2xl font-bold text-zinc-700 text-center">
          Your Cart
        </h1>
      </header>
      <form className="mt-12">
        <table className="w-full text-left max-w-screen-lg lg:mx-auto">
          <thead>
            <tr className=" text-button-text text-[8px] tracking-widest uppercase">
              <th className="py-3 px-6">Product name</th>
              <th className="py-3 px-6 hidden md:block">Quantity</th>
              <th className="py-3 px-6 text-right">Total</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple MacBook Pro 17
              </th>
              <td className="py-4 px-6">$2999</td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Microsoft Surface Pro
              </th>

              <td className="py-4 px-6">$1999</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Magic Mouse 2
              </th>

              <td className="py-4 px-6">$99</td>
            </tr>
          </tbody> */}
        </table>
      </form>
    </div>
  );
};
export default Cart;
