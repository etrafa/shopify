import CheckoutLeft from "../components/Checkout/CheckoutLeft/CheckoutLeft";
import CheckoutRight from "../components/Checkout/CheckoutRight/CheckoutRight";

const checkout = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex min-h-[50vh]">
      <CheckoutLeft />
      <CheckoutRight />
    </div>
  );
};
export default checkout;
