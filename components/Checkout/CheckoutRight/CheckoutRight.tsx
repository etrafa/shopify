import { useAppSelector } from "../../../src/store";
import CheckoutItems from "./CheckoutItems";

const CheckoutRight = () => {
  const { currentCurrency } = useAppSelector((store) => store.currency);
  const { total } = useAppSelector((store) => store.cart);

  return (
    <div className="w-full border bg-light-gray">
      <div className="w-8/12">
        <CheckoutItems />
      </div>
      <div className="w-8/12 mx-auto">
        <hr className="border-border-gray" />
        <div className="flex mt-4 justify-between">
          <h2 className="opacity-80 font-semibold tracking-wider">Total</h2>
          {currentCurrency === "USD" && (
            <p className="font-bold text-lg tracking-widest opacity-80">
              ${total}
            </p>
          )}
          {currentCurrency === "CAD" && (
            <p className="font-bold text-lg tracking-widest opacity-80">
              ${(total * 1.38).toFixed(2)} CAD
            </p>
          )}
          {currentCurrency === "EUR" && (
            <p className="font-bold text-lg tracking-widest opacity-80">
              {Math.round(total * 1.03).toFixed(2)} €
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default CheckoutRight;
