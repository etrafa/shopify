import CheckoutAddress from "./CheckoutLeft/CheckoutAddress";
import CheckoutRight from "./CheckoutRight/CheckoutRight";
import ShowOrderSummary from "./CheckoutRight/ShowOrderSummary";

const Checkout = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row md:min-h-screen">
      <div className="w-full">
        <CheckoutAddress />
      </div>

      <ShowOrderSummary />

      <div className="hidden md:block w-full bg-light-gray md:border-l md:border-border-gray">
        <CheckoutRight />
      </div>
    </div>
  );
};
export default Checkout;
