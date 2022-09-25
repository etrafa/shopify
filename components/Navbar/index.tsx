//react
import { useState } from "react";

//image && icons
import SearchIcon, {
  BagIcon,
  UserIcon,
  HamburgerIcon,
  CloseIcon,
} from "../../Utilities/Icons/Icons";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true); //check if navbar is open.

  return (
    <nav>
      <div className="flex justify-between items-center mx-6 mt-12 lg:justify-center lg:gap-x-12">
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

        <div
          className={
            isNavbarOpen
              ? "absolute top-32 lg:relative lg:top-0 w-full left-0 lg:w-auto"
              : "hidden lg:block absolute top-32 lg:relative lg:top-0 w-full left-0 lg:w-auto"
          }
        >
          <ul className="flex ml-4 flex-col lg:flex-row">
            <Link href="/">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                Home
              </li>
            </Link>
            <Link href="/store/national-teams">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                National Team
              </li>
            </Link>

            <Link href="/store-premier-leauge">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                Premier Leauge
              </li>
            </Link>
            <Link href="/store-bundesliga">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                Bundesliga
              </li>
            </Link>
            <Link href="/store-seriea-leauge">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                Serie A
              </li>
            </Link>
            <Link href="/store-la-liga">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                La Liga
              </li>
            </Link>
            <Link href="/store-ligue-one">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                Ligue One
              </li>
            </Link>
            <Link href="/store-other-clubs">
              <li className="uppercase text-sm p-4 lg:px-4 cursor-pointer hover:underline">
                Other Clubs
              </li>
            </Link>
            <li className="lg:hidden uppercase text-sm p-4 cursor-pointer hover:underline">
              Sign up
              <UserIcon iconStyle="w-5 h-5 cursor-pointer hover:scale-110 lg:hidden inline-block" />
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
