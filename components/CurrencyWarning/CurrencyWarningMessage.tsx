import { useAppSelector } from "../../src/store";

const CurrencyModal = () => {
  const { currentCurrency } = useAppSelector((store) => store.currency);

  return (
    <div className="w-60 h-12 bg-white absolute right-8 border z-50 mt-2 lg:mt-0">
      <p className="text-sm text-center pt-2 font-semibold">
        ❗
        <span className="pl-2">Currency has changed to {currentCurrency}</span>
      </p>
    </div>
  );
};
export default CurrencyModal;
