import US_FLAG from "../../public/us-flag.png";
import CANADA_FLAG from "../../public/canada-flag.png";
import MEXICO_FLAG from "../../public/mexico-flag.png";
import Image from "next/image";
import { useState } from "react";

const flagsAndCurrencies = [
  {
    flag: US_FLAG,
    currency: "USD",
  },
  {
    flag: CANADA_FLAG,
    currency: "CAD",
  },
  {
    flag: MEXICO_FLAG,
    currency: "MXN",
  },
];

const NavbarCurrency = () => {
  return (
    <div className="relative">
      <span className="inline-block w-8 h-8 pt-2 cursor-pointer">
        <Image
          src={US_FLAG}
          alt="currency-flag"
          layout="responsive"
          objectFit="contain"
        />
      </span>

      <div className="absolute w-32 h-32 bg-white z-50">
        {flagsAndCurrencies.map((country) => (
          <div
            className="flex py-2 pl-2 cursor-pointer hover:opacity-70"
            key={country.currency}
          >
            <Image
              src={country.flag}
              alt={country + "flag"}
              width={45}
              height={25}
            />
            <p className="text-sm pl-2 pt-1">{country.currency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NavbarCurrency;
