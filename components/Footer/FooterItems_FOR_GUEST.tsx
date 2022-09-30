import { NextComponentType } from "next";
import Link from "next/link";

const FooterItems_FOR_GUEST: NextComponentType = () => {
  return (
    <ul className="mt-3">
      <Link href="/account/login">
        <li className="cursor-pointer hover:underline">LOG IN</li>
      </Link>
      <Link href="/account/register">
        <li className="mt-2 cursor-pointer hover:underline">SIGN UP</li>
      </Link>
      <Link href="/account/forgot-password">
        <li className="mt-2 cursor-pointer hover:underline">Forgot Password</li>
      </Link>
    </ul>
  );
};
export default FooterItems_FOR_GUEST;
