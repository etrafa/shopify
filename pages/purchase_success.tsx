import Image from "next/image";
import Link from "next/link";
import SuccessIcon from "../public/success.png";

const purchase_successs = () => {
  return (
    <div className="min-h-[80vh]">
      <div className="flex flex-col justify-center items-center h-96">
        <Image src={SuccessIcon} width={120} height={120} alt="success" />
        <h2 className="mt-2 opactiy-70 font-semibold tracking-wide">
          Thank you for your purchase!
        </h2>
        <Link href="/">
          <button
            type="submit"
            className="border w-44 h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text mt-6 float-right"
          >
            Go home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default purchase_successs;
