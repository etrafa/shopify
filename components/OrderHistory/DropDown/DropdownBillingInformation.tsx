import { IOrderHistory } from "../../../interfaces/IOrderHistory";

const DropdownBillingInformation = (props: IOrderHistory) => {
  let total = 0;
  if (props) {
    props.cartItems.map((item) => (total += item.amount * item.price));
  }

  return (
    <article className="w-full lg:w-6/12 mt-2">
      <h2 className="font-bold text-lg text-button-text px-8 my-4 text-center lg:text-right">
        Billing Information
      </h2>
      <div className="flex px-6 gap-x-4 py-4 justify-center lg:justify-end">
        <p className="px-8 text-xs text-button-text w-24">Subtotal</p>

        {props.boughtCurrency === "USD" && (
          <p className="text-button-text opacity-110 font-bold">${total}</p>
        )}
        {props.boughtCurrency === "CAD" && (
          <p className="text-button-text opacity-110 font-bold">
            ${(total * 1.38).toFixed(2)} CAD
          </p>
        )}
        {props.boughtCurrency === "EUR" && (
          <p className="text-button-text opacity-110 font-bold">
            {(total * 1.04).toFixed(2)} €
          </p>
        )}
      </div>
      <div className="flex px-6 gap-x-4 py-4 justify-center lg:justify-end">
        <p className="px-8 text-xs text-button-text w-24">Discount</p>
        {props.boughtCurrency === "USD" && (
          <p className="line-through text-button-text opacity-110 font-bold">
            ${props.discount || 0}
          </p>
        )}
        {props.boughtCurrency === "CAD" && (
          <p className="line-through text-button-text opacity-110 font-bold">
            ${(props.discount * 1.38).toFixed(2) || 0} CAD
          </p>
        )}
        {props.boughtCurrency === "EUR" && (
          <p className="line-through text-button-text opacity-110 font-bold">
            {(props.discount * 1.04).toFixed(2) || 0} €
          </p>
        )}
      </div>
      <hr />
      <div className="flex px-6 gap-x-4 py-4 justify-center lg:justify-end">
        <p className="px-8 text-sm text-button-text w-24">Total</p>

        {props.boughtCurrency === "USD" && (
          <p className="font-bold">${total - props.discount}</p>
        )}
        {props.boughtCurrency === "CAD" && (
          <p className="font-bold">${total * 1.38 - props.discount} CAD</p>
        )}
        {props.boughtCurrency === "EUR" && (
          <p className="font-bold">{total * 1.04 - props.discount}€</p>
        )}
      </div>
    </article>
  );
};
export default DropdownBillingInformation;
