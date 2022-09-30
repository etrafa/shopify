//icons
import {
  OrderHistoryIcon,
  WishlistIcon,
  MyProfileIcon,
  CartIcon,
  AddressIcon,
  LogoutIcon,
} from "../../../Utilities/Icons/Icons";

const MyAccount = () => {
  return (
    <div className="w-full mt-14 min-h-[50vh]">
      <h1 className="text-border text-2xl font-bold text-zinc-700 text-center">
        Account
      </h1>
      <div className="grid grid-cols-2 justify-center w-full max-w-4xl mx-auto items-center gap-12 gap-y-24 md:gap-y-12 mt-24 place-items-center">
        <div>
          <OrderHistoryIcon />
          <h2 className="font-bold inline-block md:w-32 h-6 ml-3">
            Order history
          </h2>
          <p className="block underline underline-offset-2 mt-3 cursor-pointer text-button-text hover:text-slate-500">
            View
          </p>
        </div>
        <div>
          <WishlistIcon />
          <h2 className="font-bold inline-block  md:w-32 h-6 ml-3">Wishlist</h2>
          <p className="block underline underline-offset-2 mt-3 cursor-pointer text-button-text hover:text-slate-500">
            View
          </p>
        </div>
        <div>
          <MyProfileIcon />
          <h2 className="font-bold inline-block md:w-32 h-6 ml-3">
            My Profile
          </h2>
          <p className="block underline underline-offset-2 mt-3 cursor-pointer text-button-text hover:text-slate-500">
            View
          </p>
        </div>
        <div>
          <CartIcon />
          <h2 className="font-bold inline-block md:w-32 h-6 ml-3">Cart</h2>
          <p className="block underline underline-offset-2 mt-3 cursor-pointer text-button-text hover:text-slate-500">
            View
          </p>
        </div>
        <div>
          <AddressIcon />
          <h2 className="font-bold inline-block md:w-32 h-6 ml-3">Address</h2>
          <p className="block underline underline-offset-2 mt-3 cursor-pointer text-button-text hover:text-slate-500">
            View
          </p>
        </div>
        <div className="cursor-pointer">
          <LogoutIcon />
          <h2 className="font-bold inline-block md:w-32 h-6 ml-3">Logout</h2>
        </div>
      </div>
    </div>
  );
};
export default MyAccount;
