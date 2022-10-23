import CheckoutItems from "./CheckoutItems";
import Total from "./Total";

const CheckoutRight = () => {
  return (
    <div className="max-w-lg md:p-12 mt-0">
      <CheckoutItems />
      <hr className="border-border-gray mt-12" />
      <Total />
    </div>
  );
};
export default CheckoutRight;
