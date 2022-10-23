import { useAppSelector } from "../../../src/store";

const Total = () => {
  const { total } = useAppSelector((store) => store.cart);
  const { currentCurrency } = useAppSelector((store) => store.currency);

  return (
    <div className="flex mt-4 justify-between">
      <h2 className="opacity-80 font-semibold tracking-wider">Total</h2>
      {currentCurrency === "USD" && (
        <p className="font-bold text-lg tracking-widest opacity-80">${total}</p>
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
  );
};
export default Total;
