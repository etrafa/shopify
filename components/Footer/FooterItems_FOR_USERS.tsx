import Link from "next/link";

const FooterItems_FOR_USERS = () => {
  return (
    <ul className="mt-3">
      <Link href="/account/my-account/order-history">
        <li className="cursor-pointer hover:underline">My Orders</li>
      </Link>
      <Link href="/account/my-account/wishlist">
        <li className="mt-2 cursor-pointer hover:underline">My Wishlist</li>
      </Link>
      <Link href="/account/my-account/cart">
        <li className="mt-2 cursor-pointer hover:underline">My Cart</li>
      </Link>
      <Link href="/account/my-account/profile">
        <li className="mt-2 cursor-pointer hover:underline">My Profile</li>
      </Link>
    </ul>
  );
};
export default FooterItems_FOR_USERS;
