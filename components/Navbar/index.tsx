import Image from "next/image";
import {
  BagIcon,
  CloseIcon,
  HamburgerIcon,
  UserIcon,
} from "../../Utilities/Icons/Icons";
import NavbarCurrency from "./NavbarCurrency";
import NationalTeamsIcon from "../../public/national-teams.png";
import PremierLeaugeIcon from "../../public/premier-leauge.png";
import BundesligaIcon from "../../public/bundesliga.png";
import SerieAIcon from "../../public/serie-a.png";
import LaLigaIcon from "../../public/la-liga.png";
import LigueOneIcon from "../../public/ligue-one.png";
import OtherClubsIcon from "../../public/other-leauges.png";
import Link from "next/link";
import { TOGGLE_NAVBAR } from "../../src/features/navbarSlicer";
import { useAppDispatch, useAppSelector } from "../../src/store";
import { useEffect, useState } from "react";
import styles from "./Hamburger.module.css";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isNavbarOpen } = useAppSelector((store) => store.navbar);
  const { cartItems } = useAppSelector((store) => store.cart);

  const [screenSize, setScreenSize] = useState(0);

  const checkSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    if (screenSize >= 992 && isNavbarOpen) {
      dispatch(TOGGLE_NAVBAR());
    }
    return () => window.removeEventListener("resize", checkSize);
  }, [isNavbarOpen, dispatch, screenSize]);

  return (
    <nav className="mt-12 relative">
      <section className="flex justify-between flex-nowrap mx-4">
        <header className="lg:w-full lg:text-center">
          <h1 className="font-extrabold text-light-black text-2xl lg:ml-[11.5rem] lg:tracking-[0.4rem] cursor-pointer">
            EL STORE
          </h1>
        </header>
        <div className="flex justify-end items-center gap-x-4 lg:gap-x-6 lg:mr-12">
          {!isNavbarOpen && (
            <UserIcon iconStyle="w-6 h-6 lg:w-7 lg:h-7 opacity-90 cursor-pointer" />
          )}
          {!isNavbarOpen && <NavbarCurrency />}

          {!isNavbarOpen && (
            <Link href="/account/cart">
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
      <section
        className={
          isNavbarOpen
            ? "absolute top-9 w-full z-50 h-12"
            : "hidden lg:block absolute top-32 lg:relative lg:top-0 w-full left-0 lg:w-auto"
        }
      >
        <ul className="flex ml-4 flex-col lg:flex-row lg:justify-center pt-10 lg:pt-0">
          <Link href="/">
            <div className="bg-light-gray lg:bg-transparent w-11/12 lg:w-auto h-16 rounded-md mb-4 lg:my-0">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline font-bold lg:font-semibold opacity-80 lg:hover:opacity-100 tracking-wider mt-2">
                Home
              </li>
            </div>
          </Link>
          <Link href="/leauge/national-teams">
            <div className="bg-light-gray lg:bg-transparent w-11/12 lg:w-auto h-16 rounded-md mt-2 mb-4 lg:my-0 flex justify-between items-center lg:block">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline font-bold lg:font-semibold opacity-80 lg:hover:opacity-100 tracking-wider mt-2">
                National Teams
              </li>
              <span className="mr-6 lg:hidden">
                <Image
                  src={NationalTeamsIcon}
                  alt="national teams icon"
                  width={45}
                  height={45}
                />
              </span>
            </div>
          </Link>
          <Link href="/leauge/premier-leauge">
            <div className="bg-light-gray lg:bg-transparent w-11/12 lg:w-auto h-16 rounded-md mt-2 mb-4 lg:my-0 flex justify-between items-center lg:block">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline font-bold lg:font-semibold opacity-80 lg:hover:opacity-100 tracking-wider mt-2">
                Premier Leauge
              </li>
              <span className="mr-6 lg:hidden">
                <Image
                  src={PremierLeaugeIcon}
                  alt="premier leauge icon"
                  width={45}
                  height={45}
                />
              </span>
            </div>
          </Link>
          <Link href="/leauge/bundesliga">
            <div className="bg-light-gray lg:bg-transparent w-11/12 lg:w-auto h-16 rounded-md mt-2 mb-4 lg:my-0 flex justify-between items-center lg:block">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline font-bold lg:font-semibold opacity-80 lg:hover:opacity-100 tracking-wider mt-2">
                Bundesliga
              </li>
              <span className="mr-6 lg:hidden">
                <Image
                  src={BundesligaIcon}
                  alt="bundesliga icon"
                  width={45}
                  height={45}
                />
              </span>
            </div>
          </Link>
          <Link href="/leauge/seriea-leauge">
            <div className="bg-light-gray lg:bg-transparent w-11/12 lg:w-auto h-16 rounded-md mt-2 mb-4 lg:my-0 flex justify-between items-center lg:block">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline font-bold lg:font-semibold opacity-80 lg:hover:opacity-100 tracking-wider mt-2">
                Serie A
              </li>
              <span className="mr-6 lg:hidden">
                <Image
                  src={SerieAIcon}
                  alt="serie-a icon"
                  width={45}
                  height={45}
                />
              </span>
            </div>
          </Link>
          <Link href="/leauge/la-liga">
            <div className="bg-light-gray lg:bg-transparent w-11/12 lg:w-auto h-16 rounded-md mt-2 mb-4 lg:my-0 flex justify-between items-center lg:block">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline font-bold lg:font-semibold opacity-80 lg:hover:opacity-100 tracking-wider mt-2">
                La Liga
              </li>
              <span className="mr-6 lg:hidden">
                <Image
                  src={LaLigaIcon}
                  alt="la liga icon"
                  width={45}
                  height={45}
                />
              </span>
            </div>
          </Link>
          <Link href="/leauge/ligue-one">
            <div className="bg-light-gray lg:bg-transparent w-11/12 lg:w-auto h-16 rounded-md mt-2 mb-4 lg:my-0 flex justify-between items-center lg:block">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline font-bold lg:font-semibold opacity-80 lg:hover:opacity-100 tracking-wider mt-2">
                Ligue One
              </li>
              <span className="mr-6 lg:hidden">
                <Image
                  src={LigueOneIcon}
                  alt="leauge one icon"
                  width={45}
                  height={45}
                />
              </span>
            </div>
          </Link>
          <Link href="/leauge/other-clubs">
            <div className="bg-light-gray lg:bg-transparent w-11/12 lg:w-auto h-16 rounded-md mt-2 mb-4 lg:my-0 flex justify-between items-center lg:block">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline font-bold lg:font-semibold opacity-80 lg:hover:opacity-100 tracking-wider mt-2">
                Other Clubs
              </li>
              <span className="mr-6 lg:hidden">
                <Image
                  src={OtherClubsIcon}
                  alt="other leauges icon"
                  width={45}
                  height={45}
                />
              </span>
            </div>
          </Link>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;

// //react
// import { useEffect, useState } from "react";

// //image && icons
// import SearchIcon, {
//   BagIcon,
//   UserIcon,
//   HamburgerIcon,
//   CloseIcon,
//   LogoutIcon,
// } from "../../Utilities/Icons/Icons";
// import Image from "next/image";
// import Logo from "../../public/image.jpg";
// import Link from "next/link";
// import { useAppDispatch, useAppSelector } from "../../src/store";
// import NavbarCurrency from "./NavbarCurrency";
// import styles from "./Hamburger.module.css";
// import { TOGGLE_NAVBAR } from "../../src/features/navbarSlicer";
// import CurrencyWarningMessage from "../CurrencyWarning/CurrencyWarningMessage";
// import { useAuth } from "../../firebase/firabaseConfig";
// import { firebaseLogout } from "../../firebase/FirebaseAuthFunctions/firebaseLogout";

// const Navbar = () => {
//   const { cartItems } = useAppSelector((store) => store.cart);
//   const { isNavbarOpen } = useAppSelector((store) => store.navbar);

//   const currentUser = useAuth();

//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);

//   const handleScroll = () => {
//     const currentScrollPos = window.scrollY;

//     if (currentScrollPos > prevScrollPos) {
// setVisible(false);
//     } else {
//       setVisible(true);
//     }

//     setPrevScrollPos(currentScrollPos);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   });

//   const dispatch = useAppDispatch();

//   return (
//     <nav className={visible ? "sticky top-0 z-50 bg-white" : ""}>
//       <div className="flex justify-between items-center mx-6 lg:justify-center lg:gap-x-12 mt-6 lg:mt-12">
//         {!isNavbarOpen && (
//           <HamburgerIcon
//             navbarClickHandler={() => dispatch(TOGGLE_NAVBAR())}
//             iconStyle="w-7 h-7 cursor-pointer lg:hidden cursor-pointer hover:scale-110"
//           />
//         )}
//         {isNavbarOpen && (
//           <CloseIcon
//             navbarClickHandler={() => dispatch(TOGGLE_NAVBAR())}
//             iconStyle="w-7 h-7 cursor-pointer lg:hidden cursor-pointer hover:scale-110"
//           />
//         )}

//         <Link href="/">
//           <Image
//             src={Logo}
//             width={40}
//             height={40}
//             alt={"logo"}
//             className="cursor-pointer"
//           />
//         </Link>

//         <CurrencyWarningMessage />

//         <div
//           className={
//             isNavbarOpen
//               ? `${styles.hamburgerMenu} absolute top-16 lg:relative lg:top-0 w-full left-0 lg:w-auto z-50 bg-white h-full min-h-[80vh] overflow-y-scroll`
//               : "hidden lg:block absolute top-32 lg:relative lg:top-0 w-full left-0 lg:w-auto"
//           }
//         >
//           <ul
//             className="flex ml-4 flex-col lg:flex-row"
//             onClick={() => {
//               if (window.innerWidth <= 991) {
//                 dispatch(TOGGLE_NAVBAR());
//               }
//             }}
//           >
//             <Link href="/">
//               <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
//                 Home
//               </li>
//             </Link>
//             <Link href="/leauge/national-teams">
//               <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
//                 National Team
//               </li>
//             </Link>

//             <Link href="/leauge/premier-leauge">
//               <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
//                 Premier Leauge
//               </li>
//             </Link>
//             <Link href="/leauge/bundesliga">
//               <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
//                 Bundesliga
//               </li>
//             </Link>
//             <Link href="/leauge/seriea-leauge">
//               <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
//                 Serie A
//               </li>
//             </Link>
//             <Link href="/leauge/la-liga">
//               <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
//                 La Liga
//               </li>
//             </Link>
//             <Link href="/leauge/ligue-one">
//               <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
//                 Ligue One
//               </li>
//             </Link>
//             <Link href="/leauge/other-clubs">
//               <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
//                 Other Clubs
//               </li>
//             </Link>
//             {currentUser ? (
//               <li
//                 onClick={() => firebaseLogout()}
//                 className="lg:hidden uppercase text-sm py-4 px-2.5 cursor-pointer hover:underline"
//               >
//                 <LogoutIcon />
//                 <span className="pl-2">Log out</span>
//               </li>
//             ) : (
//               <Link href="/account/login">
//                 <li className="lg:hidden uppercase text-sm p-4 cursor-pointer hover:underline">
//                   Sign up
//                   <UserIcon iconStyle="w-5 h-5 cursor-pointer hover:scale-110 lg:hidden inline-block" />
//                 </li>
//               </Link>
//             )}
//           </ul>
//         </div>

//         <div className="flex gap-x-4 items-center">
//           <NavbarCurrency />
//           {currentUser ? (
//             <Link href="/account">
//               <span>
//                 <UserIcon iconStyle="w-6 h-6 cursor-pointer hover:scale-110 hidden lg:block" />
//               </span>
//             </Link>
//           ) : (
//             <Link href="/account/login">
//               <span>
//                 <UserIcon iconStyle="w-6 h-6 cursor-pointer hover:scale-110 hidden lg:block" />
//               </span>
//             </Link>
//           )}
//           {currentUser ? (
//             <Link href="/account/cart">
//               <div className="relative">
//                 <BagIcon iconStyle="w-6 h-6 cursor-pointer hover:scale-110" />
//                 <span className="w-4 h-4 absolute -bottom-1.5 -right-1 bg-light-gray inline-block text-center rounded-full text-[10px]">
//                   {cartItems.length}
//                 </span>
//               </div>
//             </Link>
//           ) : (
//             <Link href="/account/login">
//               <div className="relative">
//                 <BagIcon iconStyle="w-6 h-6 cursor-pointer hover:scale-110" />
//                 <span className="w-4 h-4 absolute -bottom-1.5 -right-1 bg-light-gray inline-block text-center rounded-full text-[10px]">
//                   {cartItems.length}
//                 </span>
//               </div>
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;
