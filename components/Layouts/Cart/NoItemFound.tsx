import Link from "next/link";

const NoItemFound = () => {
  return (
    <div>
      <h2 className="text-4xl opacity-60 text-center mt-36 italic">
        Your cart is empty
      </h2>
      <Link href="/">
        <button className="w-52 mx-auto mt-8 block h-12 bg-light-gray text-xs tracking-widest hover:scale-105 ease-in-out text-button-text opacity-90 rounded-md font-bold">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};
export default NoItemFound;
