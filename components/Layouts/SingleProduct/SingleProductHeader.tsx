import { useAppSelector } from "../../../src/store";

interface SingleProductHeaderProps {
  tshirtName: string;
  price: number;
}

const SingleProductHeader = ({
  tshirtName,
  price,
}: SingleProductHeaderProps) => {
  const { currentCurrency } = useAppSelector((store) => store.currency);

  return (
    <div>
      <header>
        <h1 className="text-border text-center mt-8 font-bold">{tshirtName}</h1>{" "}
      </header>
      {currentCurrency === "USD" && (
        <p className="italic mt-4 px-5 font-semibold text-button-text tracking-widest">
          ${price.toFixed(2)}
        </p>
      )}
      {currentCurrency === "CAD" && (
        <p className="italic mt-4 px-5 font-semibold text-button-text tracking-widest">
          ${(price * 1.38).toFixed(2)} CAD
        </p>
      )}
      {currentCurrency === "MXN" && (
        <p className="italic mt-4 px-5 font-semibold text-button-text tracking-widest">
          $ {Math.round(price * 20.04).toFixed(2)} MXN
        </p>
      )}
    </div>
  );
};
export default SingleProductHeader;
