import { ISingleProductForCart } from "../../../interfaces/SingleProductForCart";
import { addItemToCart } from "../../../src/features/cartSlicer";
import { useAppDispatch, useAppSelector } from "../../../src/store";

const SingleProductButton = (props: ISingleProductForCart) => {
  const { cartItems } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        dispatch(addItemToCart(props));
        console.log(cartItems);
      }}
      className="mt-12 w-11/12 h-12 block mx-auto border rounded-sm bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text"
    >
      Add to Cart
    </button>
  );
};
export default SingleProductButton;
