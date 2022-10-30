import { useAppSelector } from "../../../src/store";

const Total = () => {
  const { total, isDiscountApplied, discount, totalAfterDiscount } =
    useAppSelector((store) => store.cart);
  const { currentCurrency } = useAppSelector((store) => store.currency);

  if (!isDiscountApplied) {
    return (
      <div className="flex mt-12 justify-between">
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
    );
  }

  if (isDiscountApplied) {
    return (
      <>
        <div className="flex mt-12 justify-between">
          <h2 className="opacity-80 font-semibold tracking-wider">Total</h2>
          {currentCurrency === "USD" && (
            <p className="font-semibold text-md tracking-widest opacity-80 line-through">
              ${total}
            </p>
          )}
          {currentCurrency === "CAD" && (
            <p className="font-semibold text-md tracking-widest opacity-80 line-through">
              ${(total * 1.38).toFixed(2)} CAD
            </p>
          )}
          {currentCurrency === "EUR" && (
            <p className="font-semibold text-md tracking-widest opacity-80 line-through">
              {Math.round(total * 1.03).toFixed(2)} €
            </p>
          )}
        </div>
        <div className="flex mt-2 justify-between">
          <h2 className="opacity-80 font-semibold tracking-wider">Discount</h2>
          {currentCurrency === "USD" && (
            <p className="font-semibold text-md tracking-widest opacity-80">
              ${discount}
            </p>
          )}
          {currentCurrency === "CAD" && (
            <p className="font-semibold text-md tracking-widest opacity-80">
              ${(discount * 1.38).toFixed(2)} CAD
            </p>
          )}
          {currentCurrency === "EUR" && (
            <p className="font-semibold text-md tracking-widest opacity-80">
              {(discount * 1.03).toFixed(2)} €
            </p>
          )}
        </div>
        <hr className="my-6" />
        <div className="flex mt-6 justify-between">
          <h2 className="opacity-80 font-semibold tracking-wider">You Pay</h2>
          {currentCurrency === "USD" && (
            <p className="font-bold text-lg tracking-widest opacity-80">
              ${totalAfterDiscount}
            </p>
          )}
          {currentCurrency === "CAD" && (
            <p className="font-bold text-lg tracking-widest opacity-80">
              ${(totalAfterDiscount * 1.38).toFixed(2)} CAD
            </p>
          )}
          {currentCurrency === "EUR" && (
            <p className="font-bold text-lg tracking-widest opacity-80">
              {(totalAfterDiscount * 1.03).toFixed(2)} €
            </p>
          )}
        </div>
      </>
    );
  }
};
export default Total;
