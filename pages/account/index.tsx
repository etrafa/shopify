//icons
import Link from "next/link";
import Router from "next/router";

import { firebaseLogout } from "../../firebase/FirebaseAuthFunctions/firebaseLogout";
import {
  OrderHistoryIcon,
  WishlistIcon,
  MyProfileIcon,
  CartIcon,
  AddressIcon,
  LogoutIcon,
} from "../../Utilities/Icons/Icons";

const MyAccount = () => {
  return (
    <div className="w-full mt-14 min-h-[50vh]">
      <h1 className="text-border text-2xl font-bold text-zinc-700 text-center">
        Account
      </h1>
      <div className="grid grid-cols-2 justify-center w-full max-w-4xl mx-auto items-center gap-12 gap-y-24 md:gap-y-12 mt-24 place-items-center">
        <div className="w-44 h-16 ">
          <div className="flex mx-auto justify-center">
            <OrderHistoryIcon />
            <h2 className="font-bold text-sm pt-0.5 pl-1.5">Order History</h2>
          </div>
          <Link href="/account/order-history">
            <p className="block mt-2 underline underline-offset-2 cursor-pointer text-button-text hover:text-slate-500 text-center">
              View
            </p>
          </Link>
        </div>
        <div className="w-44 h-16 ">
          <div className="flex mx-auto justify-center">
            <CartIcon />
            <h2 className="font-bold text-sm pt-0.5 pl-1.5">Cart</h2>
          </div>
          <Link href="/account/cart">
            <p className="block mt-2 underline underline-offset-2 cursor-pointer text-button-text hover:text-slate-500 text-center">
              View
            </p>
          </Link>
        </div>
        <div className="w-44 h-16 ">
          <div className="flex mx-auto justify-center">
            <AddressIcon />
            <h2 className="font-bold text-sm pt-0.5 pl-1.5">Address</h2>
          </div>
          <Link href="/account/address">
            <p className="block mt-2 underline underline-offset-2 cursor-pointer text-button-text hover:text-slate-500 text-center">
              View
            </p>
          </Link>
        </div>
        <div
          className="w-44 h-16 cursor-pointer"
          onClick={() => {
            firebaseLogout();
            // Router.push("/");
            if (Router.asPath === "/account") {
              Router.push("/");
              setTimeout(() => {
                Router.reload();
              }, 200);
            }
          }}
        >
          <div className="flex mx-auto justify-center">
            <LogoutIcon />
            <h2 className="font-bold text-sm pt-0.5 pl-1.5">Logout</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyAccount;
