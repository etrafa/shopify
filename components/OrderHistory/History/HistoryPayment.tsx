import { IOrderHistory } from "../../../interfaces/IOrderHistory";

const HistoryPayment = (props: IOrderHistory) => {
  let total = 0;
  if (props) {
    props.cartItems.map((item) => (total += item.amount * item.price));
  }

  return (
    <section className="lg:ml-auto">
      {props.boughtCurrency === "USD" && (
        <p className="font-bold opacity-90 py-2">${total}</p>
      )}
      {props.boughtCurrency === "CAD" && (
        <p className="font-bold opacity-90 py-2">${total * 1.38} CAD</p>
      )}
      {props.boughtCurrency === "EUR" && (
        <p className="font-bold opacity-90 py-2">{total * 1.04} €</p>
      )}
      <p className="text-sm opacity-40 tracking-wide">Cash on deliver</p>
    </section>
  );
};
export default HistoryPayment;
