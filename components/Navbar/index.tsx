//react
import { useEffect, useState } from "react";

//image && icons
import SearchIcon, {
  BagIcon,
  UserIcon,
  HamburgerIcon,
  CloseIcon,
  LogoutIcon,
} from "../../Utilities/Icons/Icons";
import Image from "next/image";
import Logo from "../../public/image.jpg";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../src/store";
import NavbarCurrency from "./NavbarCurrency";
import styles from "./Hamburger.module.css";
import { TOGGLE_NAVBAR } from "../../src/features/navbarSlicer";
import CurrencyWarningMessage from "../CurrencyWarning/CurrencyWarningMessage";
import { useAuth } from "../../firebase/firabaseConfig";
import { firebaseLogout } from "../../firebase/FirebaseAuthFunctions/firebaseLogout";

const Navbar = () => {
  const { cartItems } = useAppSelector((store) => store.cart);
  const { isNavbarOpen } = useAppSelector((store) => store.navbar);

  const currentUser = useAuth();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const dispatch = useAppDispatch();

  return (
    <nav className={visible ? "sticky top-0 z-50 bg-white" : ""}>
      <div className="flex justify-between items-center mx-6 lg:justify-center lg:gap-x-12 mt-6 lg:mt-12">
        {!isNavbarOpen && (
          <HamburgerIcon
            navbarClickHandler={() => dispatch(TOGGLE_NAVBAR())}
            iconStyle="w-7 h-7 cursor-pointer lg:hidden cursor-pointer hover:scale-110"
          />
        )}
        {isNavbarOpen && (
          <CloseIcon
            navbarClickHandler={() => dispatch(TOGGLE_NAVBAR())}
            iconStyle="w-7 h-7 cursor-pointer lg:hidden cursor-pointer hover:scale-110"
          />
        )}

        <Link href="/">
          <Image
            src={Logo}
            width={40}
            height={40}
            alt={"logo"}
            className="cursor-pointer"
          />
        </Link>

        <CurrencyWarningMessage />

        <div
          className={
            isNavbarOpen
              ? `${styles.hamburgerMenu} absolute top-16 lg:relative lg:top-0 w-full left-0 lg:w-auto z-50 bg-white h-full min-h-[80vh] overflow-y-scroll`
              : "hidden lg:block absolute top-32 lg:relative lg:top-0 w-full left-0 lg:w-auto"
          }
        >
          <ul
            className="flex ml-4 flex-col lg:flex-row"
            onClick={() => {
              if (window.innerWidth <= 991) {
                dispatch(TOGGLE_NAVBAR());
              }
            }}
          >
            <Link href="/">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                Home
              </li>
            </Link>
            <Link href="/leauge/national-teams">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                National Team
              </li>
            </Link>

            <Link href="/leauge/premier-leauge">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                Premier Leauge
              </li>
            </Link>
            <Link href="/leauge/bundesliga">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                Bundesliga
              </li>
            </Link>
            <Link href="/leauge/seriea-leauge">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                Serie A
              </li>
            </Link>
            <Link href="/leauge/la-liga">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                La Liga
              </li>
            </Link>
            <Link href="/leauge/ligue-one">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                Ligue One
              </li>
            </Link>
            <Link href="/leauge/other-clubs">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                Other Clubs
              </li>
            </Link>
            {currentUser ? (
              <li
                onClick={() => firebaseLogout()}
                className="lg:hidden uppercase text-sm py-4 px-2.5 cursor-pointer hover:underline"
              >
                <LogoutIcon />
                <span className="pl-2">Log out</span>
              </li>
            ) : (
              <Link href="/account/login">
                <li className="lg:hidden uppercase text-sm p-4 cursor-pointer hover:underline">
                  Sign up
                  <UserIcon iconStyle="w-5 h-5 cursor-pointer hover:scale-110 lg:hidden inline-block" />
                </li>
              </Link>
            )}
          </ul>
        </div>

        <div className="flex gap-x-4 items-center">
          <NavbarCurrency />
          <Link href="/account">
            <span>
              <UserIcon iconStyle="w-6 h-6 cursor-pointer hover:scale-110 hidden lg:block" />
            </span>
          </Link>
          <Link href="/account/cart">
            <div className="relative">
              <BagIcon iconStyle="w-6 h-6 cursor-pointer hover:scale-110" />
              <span className="w-4 h-4 absolute -bottom-1.5 -right-1 bg-light-gray inline-block text-center rounded-full text-[10px]">
                {cartItems.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
