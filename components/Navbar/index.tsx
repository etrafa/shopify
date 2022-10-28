import { TOGGLE_NAVBAR } from "../../src/features/navbarSlicer";
import { useAppDispatch, useAppSelector } from "../../src/store";
import { useEffect, useState } from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarIconsAndHeader from "./NavbarIconsAndHeader";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isNavbarOpen } = useAppSelector((store) => store.navbar);
  const [screenSize, setScreenSize] = useState(0);
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

  const checkSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    if (screenSize >= 992 && isNavbarOpen) {
      dispatch(TOGGLE_NAVBAR());
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkSize);
    };
  }, [isNavbarOpen, dispatch, screenSize, handleScroll]);

  return (
    <nav
      className={
        visible
          ? "sticky top-0 bg-white z-50 mt-12 h-12 pt-2"
          : "mt-12 relative h-12"
      }
    >
      <NavbarIconsAndHeader />
      <NavbarLinks />
    </nav>
  );
};

export default Navbar;
