import { useEffect, useState } from "react";
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
import CheckoutDropDown from "./CheckoutDropDown";
import ShippingOptions from "./ShippingOptions";

const CheckoutAddress = () => {
  const [isFirstNameClicked, setIsFirstNameClicked] = useState(true);
  const [isLastNameClicked, setIsLastNameClicked] = useState(true);
  const [isAddressClicked, setIsAddressClicked] = useState(true);
  const [isCityClicked, setIsCityClicked] = useState(true);
  const [isZipCodeClicked, setIsZipCodeClicked] = useState(true);
  const [isStateClicked, setIsStateClicked] = useState(true);
  const [isPhoneClicked, setIsPhoneClicked] = useState(true);

  const { addressList } = useAppSelector((store) => store.address);
  const dispatch = useAppDispatch();
  const currentUser = useAuth();
  const [currentAddress, setCurrentAddress] = useState(addressList[0]);

  useEffect(() => {
    if (currentUser) dispatch(getUserAddress(currentUser.uid));
  }, [currentUser, dispatch]);

  return (
    <div className="w-11/12 max-w-lg mx-auto md:mx-0 lg:ml-auto lg:mr-12">
      <ShippingOptions />
      <h2 className="text-center mb-6 opacity-60 text-lg font-bold">
        Shipping Address
      </h2>
      <CheckoutDropDown
        addresslist={addressList}
        setCurrentAddress={setCurrentAddress}
      />
      <div className="flex gap-x-4">
        <div className="relative h-12 w-6/12 border border-gray-400 pl-4 mt-4 rounded-sm">
          <label className="absolute top-0 text-xs text-gray-500">
            First Name
          </label>
          <input
            disabled
            className="mt-4 text-base w-full"
            value={currentAddress?.firstName}
          />
        </div>
        <div className="relative h-12 w-6/12 border border-gray-400 pl-4 mt-4 rounded-sm">
          <label className="absolute top-0 text-xs text-gray-500">
            Last Name
          </label>
          <input
            disabled
            className="mt-4 text-base w-full"
            value={currentAddress?.lastName}
          />
        </div>
      </div>
      <div className="relative h-12 w-full border border-gray-400 pl-4 mt-4 rounded-sm">
        <label className="absolute top-0 text-xs text-gray-500">Address</label>
        <input
          disabled
          className="mt-4 text-base w-full"
          value={currentAddress?.address}
        />
      </div>
      <div className="flex gap-x-4">
        <div className="relative h-12 w-6/12 border border-gray-400 pl-4 mt-4 rounded-sm">
          <label className="absolute top-0 text-xs text-gray-500">City</label>
          <input
            disabled
            className="mt-4 text-base w-full"
            value={currentAddress?.city}
          />
        </div>

        <div className="relative h-12 w-6/12 border border-gray-400 pl-4 mt-4 rounded-sm">
          <label className="absolute top-0 text-xs text-gray-500">State</label>
          <input
            disabled
            className="mt-5 text-xs w-full"
            value={currentAddress?.state}
          />
        </div>
        <div className="relative h-12 w-6/12 border border-gray-400 pl-4 mt-4 rounded-sm">
          <label className="absolute top-0 text-xs text-gray-500">
            ZIP code
          </label>
          <input
            disabled
            className="mt-4 text-base w-full"
            value={currentAddress?.zipCode}
          />
        </div>
      </div>
      <div className="relative h-12 w-full border border-gray-400 pl-4 mt-4 rounded-sm">
        <label className="absolute top-0 text-xs text-gray-500">Phone</label>
        <input
          disabled
          className="mt-4 text-base w-full"
          value={currentAddress?.phone}
        />
      </div>
    </div>
  );
};
export default CheckoutAddress;
