import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-light-gray text-black mt-12 text-sm">
      <div className=" lg:flex flex-row lg:justify-between px-12 pb-12 lg:px-24 xl:px-48">
        <div className="pt-8 px-6">
          <h2>COMPANY INFO</h2>
          <hr className="mt-2 w-11/12 border-gray-400" />
          <ul className="mt-3">
            <Link href="/about-us">
              <li className="mt-2 cursor-pointer hover:underline">About Us</li>
            </Link>
            <Link href="/delivery-guarantee">
              <li className="mt-2 cursor-pointer hover:underline">
                Delivery Guarantee
              </li>
            </Link>
            <Link href="/privacy-policy">
              <li className="mt-2 cursor-pointer hover:underline">
                Privacy Policy
              </li>
            </Link>
            <Link href="/terms-of-use">
              <li className="mt-2 cursor-pointer hover:underline">
                Terms of Use
              </li>
            </Link>
          </ul>
        </div>
        <div className="pt-8 px-6">
          <h2>CUSTOMER SERVICE</h2>
          <hr className="mt-2 w-11/12 border-gray-400" />
          <ul className="mt-3">
            <Link href="/size-charts">
              <li className="cursor-pointer hover:underline">Size Chart</li>
            </Link>
            <Link href="/faq">
              <li className="mt-2 cursor-pointer hover:underline">FAQ</li>
            </Link>
            <Link href="/shipping-delivery">
              <li className="mt-2 cursor-pointer hover:underline">
                Shipping & Delivery
              </li>
            </Link>
            <Link href="/return-policy">
              <li className="mt-2 cursor-pointer hover:underline">
                Return Policy
              </li>
            </Link>
          </ul>
        </div>
        <div className="pt-8 px-6">
          <h2>MY ACCOUNT</h2>
          <hr className="mt-2 w-11/12 border-gray-400" />
          <ul className="mt-3">
            <Link href="/login">
              <li className="cursor-pointer hover:underline">LOG IN</li>
            </Link>
            <Link href="/create-account">
              <li className="mt-2 cursor-pointer hover:underline">SIGN UP</li>
            </Link>
            <Link href="/my-account">
              <li className="mt-2 cursor-pointer hover:underline">
                My Account
              </li>
            </Link>
            <li className="mt-2 cursor-pointer hover:underline">My Orders</li>
            <Link href="/forgot-password">
              <li className="mt-2 cursor-pointer hover:underline">
                Forgot Password
              </li>
            </Link>
          </ul>
        </div>
        <div className="pt-8 px-6">
          <h2>CONTACT US</h2>
          <hr className="mt-2 w-11/12 border-gray-400 " />
          <p className="mt-3 cursor-pointer hover:underline">
            companyinfo.gmail.com
          </p>
        </div>
      </div>
      <div className=" pb-4 text-xs">
        <hr className="mt-4 w-full border-2 border-border" />
        <p className="text-center mt-4 text-xs">© 2022 EL FOOTBALL SHOP</p>
      </div>
    </footer>
  );
};
export default Footer;
