import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../../interfaces/ProductInterface";

const StoreLayout = (props: IProduct) => {
  return (
    <Link href={"/products/" + props.id}>
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
          <span className="text-button-text text-sm font-bold px-7">
            ${props.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default StoreLayout;
