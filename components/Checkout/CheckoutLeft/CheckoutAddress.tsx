import React, { useEffect, useState } from "react";
import { useAuth } from "../../../firebase/firabaseConfig";
import { getUserAddress } from "../../../src/features/addressSlicer";
import { useAppDispatch, useAppSelector } from "../../../src/store";
import CustomInput from "../../../Utilities/Input/CustomInput";
import {
  CANADA_PROVINCES,
  COUNTRY_LIST,
  GERMANY_STATES,
  USA_STATE_LIST,
} from "../../Address/COUNTRY_LISTS";
import BuyButton from "./BuyButton";
import CheckoutDropDown from "./CheckoutDropDown";
import ShippingOptions from "./ShippingOptions";

const CheckoutAddress = () => {
  const { addressList } = useAppSelector((store) => store.address);
  const dispatch = useAppDispatch();
  const currentUser = useAuth();
  const [currentAddress, setCurrentAddress] = useState(addressList[0]);

  useEffect(() => {
    if (currentUser) dispatch(getUserAddress(currentUser.uid));
  }, [currentUser, dispatch]);

  const addressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = { [e.target.name]: e.target.value };

    setCurrentAddress({ ...currentAddress, ...newInput });

    console.log(currentAddress);
  };

  return (
    <div className="w-11/12 max-w-lg mx-auto md:mx-0 lg:ml-auto lg:mr-12">
      <ShippingOptions />
      <h2 className="font-semibold opacity-80 mb-3">Shipping Address</h2>
      <CheckoutDropDown
        addresslist={addressList}
        setCurrentAddress={setCurrentAddress}
      />
      <div className="flex flex-col md:flex-row md:gap-x-4">
        <div className="relative w-full md:w-6/12 h-12 border border-gray-400 pl-4 mt-4 rounded-sm">
          <label className="absolute top-0 text-xs text-gray-500">
            First Name
          </label>
          <input
            name="firstName"
            className="mt-4 text-base w-full bg-white"
            value={currentAddress?.firstName}
            onChange={addressChangeHandler}
          />
        </div>
        <div className="relative w-full md:w-6/12 h-12 border border-gray-400 pl-4 mt-4 rounded-sm">
          <label className="absolute top-0 text-xs text-gray-500">
            Last Name
          </label>
          <input
            name="lastName"
            className="mt-4 text-base w-full bg-white"
            onChange={addressChangeHandler}
            value={currentAddress?.lastName}
          />
        </div>
      </div>
      <div className="relative h-12 w-full border border-gray-400 pl-4 mt-4 rounded-sm">
        <label className="absolute top-0 text-xs text-gray-500">Address</label>
        <input
          name="address"
          className="mt-4 text-base w-full bg-white"
          onChange={addressChangeHandler}
          value={currentAddress?.address}
        />
      </div>

      <div className="flex flex-col md:flex-row md:gap-x-4">
        <div className="relative w-full md:w-6/12 h-12 border border-gray-400 pl-4 mt-4 rounded-sm">
          <label className="absolute top-0 text-xs text-gray-500">City</label>
          <input
            name="city"
            className="mt-4 text-base w-full bg-white"
            onChange={addressChangeHandler}
            value={currentAddress?.city}
          />
        </div>

        <div className="relative w-full md:w-6/12 h-12 border border-gray-400 pl-4 mt-4 rounded-sm">
          <label className="absolute top-0 text-xs text-gray-500">
            Country
          </label>
          <select
            value={currentAddress.country}
            onChange={(e) =>
              setCurrentAddress({ ...currentAddress, country: e.target.value })
            }
            className="mt-5 text-base md:text-sm lg:text-base w-full bg-white"
          >
            {COUNTRY_LIST.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="relative w-full md:w-6/12 h-12 border border-gray-400 pl-4 mt-4 rounded-sm">
          <label className="absolute top-0 text-xs text-gray-500">
            ZIP code
          </label>
          <input
            name="zipCode"
            className="mt-4 text-base w-full bg-white"
            onChange={addressChangeHandler}
            value={currentAddress?.zipCode}
          />
        </div>
      </div>
      {currentAddress.country === "United States" ||
      currentAddress.country === "Canada" ||
      currentAddress.country === "Germany" ? (
        <div className="relative w-full h-12 border border-gray-400 pl-4 mt-4 rounded-sm">
          <label className="absolute top-0 text-xs text-gray-500">State</label>
          <select
            value={currentAddress.state}
            onChange={(e) =>
              setCurrentAddress({ ...currentAddress, state: e.target.value })
            }
            className="mt-5 text-base md:text-sm lg:text-base w-full bg-white border-0"
          >
            {currentAddress.country === "United States" &&
              USA_STATE_LIST.map((state) => (
                <option key={state}>{state}</option>
              ))}
            {currentAddress.country === "Canada" &&
              CANADA_PROVINCES.map((state) => (
                <option key={state}>{state}</option>
              ))}
            {currentAddress.country === "Germany" &&
              GERMANY_STATES.map((state) => (
                <option key={state}>{state}</option>
              ))}
          </select>
        </div>
      ) : null}

      <div className="relative w-full h-12 border border-gray-400 pl-4 mt-4 rounded-sm">
        <label className="absolute top-0 text-xs text-gray-500">Phone</label>
        <input
          name="phone"
          className="mt-4 text-base w-full bg-white"
          onChange={addressChangeHandler}
          value={currentAddress?.phone}
        />
      </div>
      <BuyButton />
    </div>
  );
};
export default CheckoutAddress;
