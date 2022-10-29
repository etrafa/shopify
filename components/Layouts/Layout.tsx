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
    if (currentUser) {
      dispatch(getCartItems(currentUser?.uid));
    }
  }, [dispatch, currentUser]);

  return (
    <>
      <Navbar />
      {isNavbarOpen ? null : <main>{children}</main>}
      <Footer />
    </>
  );
};
export default Layout;
