import Image from "next/image";
import { IOrderHistory } from "../../../interfaces/IOrderHistory";

const HistoryImage = (props: IOrderHistory) => {
  return (
    <section className="w-32 hidden md:block">
      {props.cartItems.map((item) => (
        <span className="inline-block h-full border rounded-full" key={item.id}>
          <Image
            src={item.frontLarge}
            alt="item preview"
            width={20}
            height={20}
          />
        </span>
      ))}
    </section>
  );
};
export default HistoryImage;
