import { useEffect } from "react";
import { CALCULATE_AMOUNTS } from "../../../src/features/cartSlicer";
import { useAppDispatch, useAppSelector } from "../../../src/store";

const SubTotal = () => {
  const dispatch = useAppDispatch();
  const { cartItems, totalAmount } = useAppSelector((store) => store.cart);

  useEffect(() => {
    dispatch(CALCULATE_AMOUNTS());
  }, [cartItems]);

  return (
    <div>
      <div className="w-full max-w-5xl mt-12 mb-12 md:mb-24 text-center md:mx-auto md:text-right md:px-4 md:relative">
        <h3 className="inline opacity-70 text-sm tracking-wider font-bold">
          Subtotal
        </h3>
        <p className="inline tracking-widest pl-6 opacity-95">
          ${totalAmount} USD
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          type="submit"
          className="border w-80 mx-auto mt-8 block md:absolute md:right-4 md:text-center h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text opacity-90 rounded-md font-bold"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default SubTotal;
