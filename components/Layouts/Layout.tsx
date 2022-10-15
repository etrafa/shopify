import { NextPage } from "next";
import { useEffect } from "react";
import { useAppSelector } from "../../src/store";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isNavbarOpen } = useAppSelector((store) => store.navbar);

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isNavbarOpen]);

  return (
    <div className="etem-senel">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
