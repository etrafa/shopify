import CheckoutLeft from "../components/Checkout/CheckoutLeft/CheckoutLeft";
import CheckoutRight from "../components/Checkout/CheckoutRight/CheckoutRight";

const checkout = () => {
  return (
    <div className="w-full mx-auto flex min-h-[80vh]">
      <CheckoutLeft />
      <CheckoutRight />
    </div>
  );
};
export default checkout;