import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ISingleProductForCart } from "../../../interfaces/SingleProductForCart";
import { useAppDispatch, useAppSelector } from "../../../src/store";
import { CloseIcon } from "../../../Utilities/Icons/Icons";
import styles from "./CartModal.module.css";

interface AddItemToCartModalProps {
  tshirtName: string;
  frontLarge: string;
  size: string;
}

const AddItemToCartModal = (props: AddItemToCartModalProps) => {
  const dispatch = useAppDispatch();
  // const { isCartModalOpen } = useAppSelector((store) => store.product);

  // useEffect(() => {
  //   return () => {
  //     dispatch(CLOSE_CART_MODAL());
  //   };
  // }, []);

  return (
    <>
      {/* {isCartModalOpen && ( */}
      <div
        className={`${styles.cartModal} w-full max-w-[768px] md:max-w-sm min-h-screen md:min-h-[24rem] md:left-3/4 md:fixed bg-white border-2 md:pb-6 z-50 rounded-md absolute left-1/2 transform -translate-x-1/2 -top-10`}
      >
        <p className="text-sm py-10 pl-24 opacity-80">
          <span className="text-xs">✔️</span> Item added to your cart
        </p>
        <CloseIcon
          // navbarClickHandler={() => dispatch(CLOSE_CART_MODAL())}
          iconStyle="w-6 h-6 absolute top-2 right-2 opacity-60 cursor-pointer hover:scale-110"
        />
        <div className="flex">
          <span className="pt-6 pl-4">
            <Image
              src={props.frontLarge}
              alt={props.tshirtName}
              width={120}
              height={120}
            />
          </span>
          <div className="px-4">
            <h2 className="text-xs opacity-80 mt-6">{props.tshirtName}</h2>
            <p className="text-sm opacity-80 py-2">Size: {props.size}</p>
          </div>
        </div>
        <div>
          <Link href="/account/cart">
            <button className="mt-12 w-11/12 h-12 block mx-auto border rounded-sm bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text">
              Go to cart
            </button>
          </Link>
          <p
            // onClick={() => dispatch(CLOSE_CART_MODAL())}
            className="underline underline-offset-2 text-center mt-4 cursor-pointer"
          >
            Continue shopping
          </p>
        </div>
      </div>
      {/* )} */}
    </>
  );
};
export default AddItemToCartModal;
