import { useEffect } from "react";
import { CLOSE_CURRENCY_WARNING } from "../../src/features/currencySlicer";
import { useAppDispatch, useAppSelector } from "../../src/store";
import styles from "./CurrencyWarning.module.css";

const CurrencyModal = () => {
  const { currentCurrency, isCurrencyWarningOpen } = useAppSelector(
    (store) => store.currency
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isCurrencyWarningOpen) {
      setTimeout(() => {
        dispatch(CLOSE_CURRENCY_WARNING());
      }, 3000);
    }
  }, [isCurrencyWarningOpen, dispatch]);

  return (
    <>
      {isCurrencyWarningOpen && (
        <div
          className={`${styles.currencyWarning} w-80 h-12 bg-green-400 text-white absolute right-8 rounded-xl z-50 mt-2 lg:mt-0`}
        >
          <p className="text-sm text-center pt-2 font-semibold pl-2">
            Currency has changed to {currentCurrency}
          </p>
        </div>
      )}
    </>
  );
};
export default CurrencyModal;
