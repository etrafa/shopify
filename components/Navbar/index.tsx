import SearchIcon, {
  BagIcon,
  UserIcon,
  HamburgerIcon,
  CloseIcon,
} from "../../Utilities/Icons/Icons";
import Image from "next/image";
import Logo from "../../public/logo.png";
import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); //check if navbar is open.

  return (
    <nav>
      <div className="flex justify-between items-center mx-6 mt-2 lg:justify-center lg:gap-x-12">
        {!isNavbarOpen && (
          <HamburgerIcon
            navbarClickHandler={() => setIsNavbarOpen(!isNavbarOpen)}
            iconStyle="w-7 h-7 cursor-pointer lg:hidden cursor-pointer hover:scale-110"
          />
        )}
        {isNavbarOpen && (
          <CloseIcon
            navbarClickHandler={() => setIsNavbarOpen(!isNavbarOpen)}
            iconStyle="w-7 h-7 cursor-pointer lg:hidden cursor-pointer hover:scale-110"
          />
        )}

        <Image
          src={Logo}
          width={70}
          height={70}
          alt={"logo"}
          className="cursor-pointer"
        />

        <div className="hidden lg:block">
          <ul className="flex ml-4">
            <li className="uppercase text-sm px-4 cursor-pointer hover:underline">
              Home
            </li>
            <li className="uppercase text-sm px-4 cursor-pointer hover:underline">
              National Team
            </li>
            <li className="uppercase text-sm px-4 cursor-pointer hover:underline">
              Premier Leauge
            </li>
            <li className="uppercase text-sm px-4 cursor-pointer hover:underline">
              Bundesliga
            </li>
            <li className="uppercase text-sm px-4 cursor-pointer hover:underline">
              Serie A
            </li>
            <li className="uppercase text-sm px-4 cursor-pointer hover:underline">
              La Liga
            </li>
            <li className="uppercase text-sm px-4 cursor-pointer hover:underline">
              Ligue One
            </li>
            <li className="uppercase text-sm px-4 cursor-pointer hover:underline">
              Other Clubs
            </li>
          </ul>
        </div>
        <div className="flex gap-x-4">
          <SearchIcon iconStyle="w-6 h-6 cursor-pointer hover:scale-110" />
          <UserIcon iconStyle="w-6 h-6 cursor-pointer hover:scale-110 hidden lg:block" />
          <BagIcon iconStyle="w-6 h-6 cursor-pointer hover:scale-110" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
