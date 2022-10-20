// import {
//   decreaseQuantity,
//   increaseQuantity,
// } from "../../../src/features/productSlicer";
import { ISingleProductForCart } from "../../../interfaces/SingleProductForCart";
import { decrease, increase } from "../../../src/features/cartSlicer";
import { useAppDispatch, useAppSelector } from "../../../src/store";

interface SingleProductQuantityProps {
  amount: number;
}

const SingleProductQuantity = (props: SingleProductQuantityProps) => {
  // const { value } = useAppSelector((store) => store.product);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p className="text-button-text text-sm mt-8 pl-4">Quantity</p>
      <div className="w-4/12 max-w-xs h-10 border flex items-center mx-4 my-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(decrease());
          }}
          className="w-3/12 h-10 text-button-text font-bold text-xl"
        >
          -
        </button>
        <input
          className="w-6/12 text-center h-full"
          type="number"
          name="quantity"
          min={1}
          max={10}
          value={props.amount}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(increase());
          }}
          className="w-3/12 h-10 text-button-text font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
};
export default SingleProductQuantity;
