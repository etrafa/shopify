import US_FLAG from "../../public/us-flag.png";
import CANADA_FLAG from "../../public/canada-flag.png";
import MEXICO_FLAG from "../../public/euro-flag.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../src/store";
import {
  OPEN_CURRENCY_WARNING,
  SET_CURRENT_CURRENCY,
  TOGGLE_CURRENCY_MODAL,
} from "../../src/features/currencySlicer";
import { useState } from "react";

const flagsAndCurrencies = [
  {
    flag: US_FLAG,
    currency: "USD",
    country: "United States",
  },
  {
    flag: CANADA_FLAG,
    currency: "CAD",
    country: "Canada",
  },
  {
    flag: MEXICO_FLAG,
    currency: "EUR",
    country: "Europe",
  },
];

const NavbarCurrency = () => {
  const { isCurrencyModalOpen } = useAppSelector((store) => store.currency);
  const dispatch = useAppDispatch();
  const [currentFlag, setCurrentFlag] = useState(US_FLAG);

  console.log(isCurrencyModalOpen);

  return (
    <div className="relative">
      <span
        onClick={() => dispatch(TOGGLE_CURRENCY_MODAL())}
        className="inline-block w-8 h-8 pt-2 cursor-pointer"
      >
        <Image
          src={currentFlag}
          alt="currency-flag"
          layout="responsive"
          objectFit="contain"
        />
      </span>
      {isCurrencyModalOpen && (
        <div className="absolute w-32 h-32 bg-white z-50">
          {flagsAndCurrencies.map((country) => (
            <div
              onClick={() => {
                setCurrentFlag(country.flag);
                dispatch(SET_CURRENT_CURRENCY(country.currency));
                dispatch(OPEN_CURRENCY_WARNING());
              }}
              className="flex py-2 pl-2 cursor-pointer hover:opacity-70"
              key={country.currency}
            >
              <Image
                src={country.flag}
                alt={country.country + "flag"}
                width={45}
                height={25}
              />
              <p className="text-sm pl-2 pt-1">{country.currency}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default NavbarCurrency;
