import { AnyAction } from "@reduxjs/toolkit";
import Image from "next/image";
import { MouseEvent } from "react";
import { useAuth } from "../../../firebase/firabaseConfig";
import { UPDATE_CART_PRODUCT_AMOUNT } from "../../../firebase/FirebaseCartFunctions/UPDATE_CART_PRODUCT_AMOUNT";
import { ISingleProductForCart } from "../../../interfaces/SingleProductForCart";
import {
  decreaseOnCart,
  deleteCartItem,
  increaseOnCart,
  removeItem,
} from "../../../src/features/cartSlicer";
import { useAppDispatch, useAppSelector } from "../../../src/store";
import { DeleteIcon } from "../../../Utilities/Icons/Icons";

const CartFormBody = (props: ISingleProductForCart) => {
  const dispatch = useAppDispatch();
  const currentUser = useAuth();
  const { currentCurrency } = useAppSelector((store) => store.currency);

  enum QUANTITY_TYPE {
    DECREASE = "DECREASE",
    INCREASE = "INCREASE",
  }

  const handleUpdateCartProductAmount = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    type: string
  ) => {
    e.preventDefault();
    if (currentUser) {
      if (type === QUANTITY_TYPE.DECREASE) {
        dispatch(decreaseOnCart(props.id));
        if (props.amount > 1)
          UPDATE_CART_PRODUCT_AMOUNT(currentUser.uid, props, props.amount - 1);
      }
      if (type === QUANTITY_TYPE.INCREASE) {
        dispatch(increaseOnCart(props.id));
        UPDATE_CART_PRODUCT_AMOUNT(currentUser.uid, props, props.amount + 1);
      }
    }
  };

  return (
    <div>
      <div key={props.id} className="flex mt-12">
        <div className="w-4/12 pl-1.5">
          <Image
            src={props.frontLarge}
            width={120}
            height={120}
            alt={props.tshirtName}
          />
        </div>
        <div className="hidden md:block w-6/12 h-32">
          <p className="text-xs px-6 leading-5 opacity-70">
            {props.tshirtName}
          </p>
          <p className="text-xs px-6 py-2 opacity-70">
            Size: <span className="pl-0.5">{props.size}</span>
          </p>
        </div>
        <div className="w-6/12 h-32">
          <p className="text-xs px-6 leading-5 opacity-70 md:hidden">
            {props.tshirtName}
          </p>
          <p className="text-xs px-6 py-2 opacity-70 md:hidden">
            Size: <span className="pl-0.5">{props.size}</span>
          </p>
          <div className="w-8/12 md:w-6/12 max-w-xs  my-3 mx-6 md:mx-auto h-10 relative">
            <div className="border flex items-center">
              <button
                onClick={(e) =>
                  handleUpdateCartProductAmount(e, QUANTITY_TYPE.DECREASE)
                }
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
                onClick={(e) =>
                  handleUpdateCartProductAmount(e, QUANTITY_TYPE.INCREASE)
                }
                className="w-3/12 h-10 text-button-text font-bold"
              >
                +
              </button>
            </div>
            <span className="absolute top-3 -right-10 cursor-pointer opacity-60 hover:opacity-40">
              <DeleteIcon
                clickHandler={() => {
                  dispatch(removeItem(props.id));
                  if (currentUser) {
                    dispatch(
                      deleteCartItem({
                        productID: props.id,
                        userID: currentUser.uid,
                      })
                    );
                  }
                }}
              />
            </span>
          </div>
        </div>
        <div className="w-2/12 h-32 text-right pt-4">
          {currentCurrency === "USD" && (
            <p className="text-sm pr-4 tracking-widest">
              ${(props.amount * props.price).toFixed(2)}
            </p>
          )}
          {currentCurrency === "CAD" && (
            <p className="text-sm pr-4 tracking-widest">
              ${(props.amount * props.price * 1.38).toFixed(2)} CAD
            </p>
          )}
          {currentCurrency === "EUR" && (
            <p className="text-sm pr-4 tracking-widest">
              {Math.round(props.amount * props.price * 1.03).toFixed(2)} €
            </p>
          )}
        </div>
      </div>
      <hr className="mt-8 w-11/12 mx-auto md:w-full" />
    </div>
  );
};
export default CartFormBody;
