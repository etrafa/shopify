import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../../interfaces/ProductInterface";

const StoreLayout = (props: IProduct) => {
  return (
    <Link href={"/products/" + props.id}>
      <div className="text-center py-8 flex flex-col justify-between items-center">
        {/* // ? ON HOVER SHOW SECOND IMAGE OF PRODUCT */}
        {props.backLarge ? (
          <div className="group">
            <span className="cursor-pointer group-hover:hidden">
              <Image
                className="cursor-pointer"
                width={240}
                height={240}
                src={props.frontLarge}
                alt={props.tshirtName}
              />
            </span>
            {props.backLarge && (
              <span className="cursor-pointer hidden group-hover:block">
                <Image
                  priority
                  src={props.backLarge}
                  width={240}
                  height={240}
                  alt={props.tshirtName}
                />
              </span>
            )}
          </div>
        ) : (
          /* // ? SHOW FIRST IMAGE OF PRODUCT IF THERE IS NO SECOND PICTURE */
          <span className="cursor-pointer group-hover:hidden">
            <Image
              className="cursor-pointer"
              width={240}
              height={240}
              src={props.frontLarge}
              alt={props.tshirtName}
            />
          </span>
        )}
        <span className="text-sm block text-border font-medium cursor-pointer hover:text-hoverText">
          {props.tshirtName?.toUpperCase()}
        </span>
        <hr className="w-10/12 mt-1" />
        <div className="mb-6">
          <span className="text-gray-600 font-bold">${props.price}</span>
        </div>
      </div>
    </Link>
  );
};
export default StoreLayout;
