import Image from "next/image";
import { useEffect } from "react";
import { useAuth } from "../../../firebase/firabaseConfig";
import { ISingleProductForCart } from "../../../interfaces/SingleProductForCart";
import { getCartItems } from "../../../src/features/cartSlicer";
import { useAppDispatch, useAppSelector } from "../../../src/store";

type CheckoutProps = {
  cartItems: ISingleProductForCart;
};

const CheckoutItems = () => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((store) => store.cart);
  const { currentCurrency } = useAppSelector((store) => store.currency);
  const currentUser = useAuth();

  useEffect(() => {
    if (currentUser) {
      dispatch(getCartItems(currentUser?.uid));
    }
  }, [dispatch, currentUser]);

  return (
    <div className="w-full flex flex-col m-12">
      <table>
        <thead className="w-full">
          <td className="w-1/12"></td>
          <td className="w-8/12"></td>
          <td></td>
        </thead>
        <tbody>
          {cartItems &&
            cartItems.map((item) => {
              const { id, frontLarge, amount, price, tshirtName } = item;
              return (
                <tr key={id}>
                  <td className="py-2">
                    <div className="h-16 w-16 bg-white border border-gray-300 rounded-md relative">
                      <span className="pl-2.5 pt-2 h-full inline-block">
                        <Image
                          src={frontLarge}
                          alt={tshirtName}
                          width={40}
                          height={40}
                        />
                      </span>
                      <span className="absolute -top-2 w-5 h-5 bg-dark-gray rounded-full text-white text-center font-bold text-sm">
                        {amount}
                      </span>
                    </div>
                  </td>
                  <td className="py-2">
                    <h3 className="text-xs font-semibold px-5 opacity-80">
                      {tshirtName}
                    </h3>
                  </td>
                  <td className="py-2">
                    {currentCurrency === "USD" && (
                      <p className="font-semibold text-sm">
                        ${(amount * price).toFixed(2)}
                      </p>
                    )}
                    {currentCurrency === "CAD" && (
                      <p className="font-semibold text-sm">
                        ${(amount * price * 1.38).toFixed(2)} CAD
                      </p>
                    )}
                    {currentCurrency === "EUR" && (
                      <p className="font-semibold text-sm">
                        {Math.round(amount * price * 1.03).toFixed(2)} €
                      </p>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default CheckoutItems;
