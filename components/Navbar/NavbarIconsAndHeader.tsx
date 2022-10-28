import Link from "next/link";
import { useAuth } from "../../firebase/firabaseConfig";
import { TOGGLE_NAVBAR } from "../../src/features/navbarSlicer";
import { useAppDispatch, useAppSelector } from "../../src/store";
import {
  BagIcon,
  CloseIcon,
  HamburgerIcon,
  UserIcon,
} from "../../Utilities/Icons/Icons";
import NavbarCurrency from "./NavbarCurrency";

const NavbarIconsAndHeader = () => {
  const { isNavbarOpen } = useAppSelector((store) => store.navbar);
  const { cartItems } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  const currentUser = useAuth();

  return (
    <section className="flex justify-between flex-nowrap mx-4">
      <header className="lg:w-full lg:text-center">
        <Link href="/">
          <h1 className="font-extrabold text-light-black text-2xl lg:ml-[11.5rem] lg:tracking-[0.4rem] cursor-pointer">
            EL STORE
          </h1>
        </Link>
      </header>
      <div className="flex justify-end items-center gap-x-4 lg:gap-x-6 lg:mr-12">
        {!isNavbarOpen && (
          <Link href={currentUser ? "/account" : "/account/login"}>
            <span>
              <UserIcon iconStyle="w-6 h-6 lg:w-7 lg:h-7 opacity-90 cursor-pointer" />
            </span>
          </Link>
        )}
        {!isNavbarOpen && <NavbarCurrency />}

        {!isNavbarOpen && (
          <Link href={currentUser ? "/account/cart" : "/account/login"}>
            <div className="relative">
              <BagIcon iconStyle="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer" />{" "}
              <span className="w-4 h-4 absolute -bottom-1.5 -right-1 bg-light-gray inline-block text-center rounded-full text-[10px]">
                {cartItems.length}
              </span>
            </div>
          </Link>
        )}
        {isNavbarOpen ? (
          <CloseIcon
            iconStyle="h-6 w-6 cursor-pointer"
            navbarClickHandler={() => dispatch(TOGGLE_NAVBAR())}
          />
        ) : (
          <HamburgerIcon
            iconStyle="w-7 h-7 cursor-pointer lg:hidden"
            navbarClickHandler={() => dispatch(TOGGLE_NAVBAR())}
          />
        )}
      </div>
    </section>
  );
};
export default NavbarIconsAndHeader;
