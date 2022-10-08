import {
  decreaseQuantity,
  increaseQuantity,
} from "../../../src/features/productSlicer";
import { useAppDispatch, useAppSelector } from "../../../src/store";

const SingleProductQuantity = () => {
  const { value } = useAppSelector((store) => store.product);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p className="text-button-text text-sm mt-8 pl-4">Quantity</p>
      <div className="w-4/12 max-w-xs h-10 border flex items-center mx-4 my-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(decreaseQuantity());
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
          value={value.amount}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(increaseQuantity());
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
