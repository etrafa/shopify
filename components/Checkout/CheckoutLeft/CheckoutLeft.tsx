import CheckoutAddress from "./CheckoutAddress";

const CheckoutLeft = () => {
  return (
    <div className="w-full">
      <header>
        <h2>Shipping Address</h2>
      </header>
      <div>
        <CheckoutAddress />
      </div>
    </div>
  );
};
export default CheckoutLeft;
