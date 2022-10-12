import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../../../interfaces/ProductInterface";
import { useAppSelector } from "../../../src/store";

const StoreLayout = (props: IProduct) => {
  const { currentCurrency } = useAppSelector((store) => store.currency);

  return (
    <Link href={"/products/" + props.leauge + "/" + props.id}>
      <div className="py-8 flex flex-col justify-between items-center group">
        <span
          className={
            props.backLarge
              ? "cursor-pointer group-hover:hidden"
              : "cursor-pointer"
          }
        >
          <Image
            src={props.frontLarge}
            width={240}
            height={240}
            alt={props.tshirtName}
          />
        </span>
        {props.backLarge && (
          <span className="cursor-pointer hidden group-hover:block">
            <Image
              src={props.backLarge}
              width={240}
              height={240}
              alt={props.tshirtName}
            />
          </span>
        )}
        <span className="text-xs block px-4 text-center text-border font-medium cursor-pointer group-hover:underline">
          {props.tshirtName?.toUpperCase()}
        </span>
        <div className="my-2 w-full">
          {currentCurrency === "USD" && (
            <span className="text-button-text text-sm font-bold px-7">
              ${props.price.toFixed(2)}
            </span>
          )}
          {currentCurrency === "CAD" && (
            <span className="text-button-text text-sm font-bold px-7">
              ${(props.price * 1.38).toFixed(2)} CAD
            </span>
          )}
          {currentCurrency === "MXN" && (
            <span className="text-button-text text-sm font-bold px-7">
              $ {Math.round(props.price * 20.04).toFixed(2)} MXN
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
export default StoreLayout;
