import { IOrderHistory } from "../../../interfaces/IOrderHistory";

const DropDownHeader = (props: IOrderHistory) => {
  return (
    <section className="overflow-x-auto">
      <h1 className="font-bold text-lg text-button-text px-8 my-4">
        Order Details
      </h1>
      {props?.cartItems?.map((item) => (
        <div className="flex items-center" key={item.id}>
          <span className="text-sm px-4 py-2 font-bold">{item.amount}x</span>
          <span className="text-sm px-4 py-2">{item.tshirtName}</span>
          <span className="text-sm px-4 py-2 font-bold">
            ${item.amount * item.price}
          </span>
        </div>
      ))}
    </section>
  );
};
export default DropDownHeader;
