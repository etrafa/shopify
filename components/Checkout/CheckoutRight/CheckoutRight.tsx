import CheckoutItems from "./CheckoutItems";
import Coupon from "./Coupon";
import Total from "./Total";

const CheckoutRight = () => {
  return (
    <div className="max-w-lg md:p-12 mt-0">
      <CheckoutItems />
      <hr className="border-border-gray mt-12" />
      <Coupon />
      <hr className="border-border-gray mt-4" />

      <Total />
    </div>
  );
};
export default CheckoutRight;
