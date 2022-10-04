import { useAuth } from "../../../firebase/firabaseConfig";
import { ADD_ITEM_TO_DB } from "../../../firebase/FirebaseCartFunctions/ADD_ITEM_TO_DB";
import { ISingleProductForCart } from "../../../interfaces/SingleProductForCart";
import { addItemToCart } from "../../../src/features/cartSlicer";
import { useAppDispatch, useAppSelector } from "../../../src/store";

const SingleProductButton = (props: ISingleProductForCart) => {
  const dispatch = useAppDispatch();
  const currentUser = useAuth();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        dispatch(addItemToCart(props));
        if (currentUser) {
          ADD_ITEM_TO_DB(props, currentUser.uid);
        }
      }}
      className="mt-12 w-11/12 h-12 block mx-auto border rounded-sm bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text"
    >
      Add to Cart
    </button>
  );
};
export default SingleProductButton;
