import { useState } from "react";
import { useAppSelector } from "../../../src/store";
import CheckoutRight from "./CheckoutRight";

const ShowOrderSummary = () => {
  const [showSummary, setShowSummary] = useState(false);
  const { total } = useAppSelector((store) => store.cart);
  const { currentCurrency } = useAppSelector((store) => store.currency);

  return (
    <div className="md:hidden my-12">
      <aside
        className="w-full bg-light-gray h-14"
        onClick={() => setShowSummary((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 inline-block opacity-70 ml-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <h2 className="inline-block text-sm py-4 pl-2 font-semibold opacity-80">
          {showSummary ? "Hide order summary" : "Show order summary"}
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 inline-block opacity-70 ml-2 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>

        <h2 className="inline float-right mr-4 mt-4 text-md font-semibold tracking-widest">
          {currentCurrency === "USD" && <span>${total.toFixed(2)}</span>}
          {currentCurrency === "CAD" && (
            <span> ${(total * 1.38).toFixed(2)} CAD</span>
          )}
          {currentCurrency === "EUR" && (
            <span>{Math.round(total * 1.03).toFixed(2)} €</span>
          )}
        </h2>
      </aside>
      {showSummary && <CheckoutRight />}
    </div>
  );
};
export default ShowOrderSummary;
