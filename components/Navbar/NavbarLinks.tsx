import Link from "next/link";
import NationalTeamsIcon from "../../public/national-teams.png";
import PremierLeaugeIcon from "../../public/premier-leauge.png";
import BundesligaIcon from "../../public/bundesliga.png";
import SerieAIcon from "../../public/serie-a.png";
import LaLigaIcon from "../../public/la-liga.png";
import LigueOneIcon from "../../public/ligue-one.png";
import OtherClubsIcon from "../../public/other-leauges.png";
import { useAppDispatch, useAppSelector } from "../../src/store";
import { TOGGLE_NAVBAR } from "../../src/features/navbarSlicer";
import Image from "next/image";
import styles from "./Hamburger.module.css";

const NavbarLinks = () => {
  const { isNavbarOpen } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  return (
    <section
      className={
        isNavbarOpen
          ? `${styles.hamburgerMenu} absolute top-9 w-full z-50 h-12 bg-white`
          : "hidden lg:block absolute top-32 lg:relative lg:top-0 w-full left-0 lg:w-auto bg-white"
      }
    >
      <ul
        onClick={() => {
          if (isNavbarOpen) {
            dispatch(TOGGLE_NAVBAR());
          }
        }}
        className="flex ml-4 flex-col lg:flex-row lg:justify-center pt-10 lg:pt-0"
      >
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
  );
};
export default NavbarLinks;
