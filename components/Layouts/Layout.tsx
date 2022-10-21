import { NextPage } from "next";
import { useEffect } from "react";
import { useAuth } from "../../firebase/firabaseConfig";
import { getCartItems } from "../../src/features/cartSlicer";
import { useAppDispatch, useAppSelector } from "../../src/store";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isNavbarOpen } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();
  const currentUser = useAuth();

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    if (currentUser) {
      dispatch(getCartItems(currentUser?.uid));
    }
  }, [isNavbarOpen, dispatch, currentUser]);

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
