import { useEffect, useState } from "react";
import { useAuth } from "../../../firebase/firabaseConfig";
import { getUserAddress } from "../../../src/features/addressSlicer";
import { useAppDispatch, useAppSelector } from "../../../src/store";
import CustomInput from "../../../Utilities/Input/CustomInput";
import CheckoutDropDown from "./CheckoutDropDown";

const CheckoutAddress = () => {
  const [isFirstNameClicked, setIsFirstNameClicked] = useState(false);
  const [isLastNameClicked, setIsLastNameClicked] = useState(false);
  const [isAddressClicked, setIsAddressClicked] = useState(false);
  const [isCityClicked, setIsCityClicked] = useState(false);
  const [isZipCodeClicked, setIsZipCodeClicked] = useState(false);
  const [isStateClicked, setIsStateClicked] = useState(false);
  const [isPhoneClicked, setIsPhoneClicked] = useState(false);

  const { addressList } = useAppSelector((store) => store.address);
  const dispatch = useAppDispatch();
  const currentUser = useAuth();
  const [currentAddress, setCurrentAddress] = useState(addressList[0]);

  useEffect(() => {
    if (currentUser) dispatch(getUserAddress(currentUser.uid));
  }, [currentUser, dispatch]);

  return (
    <div className="w-full bg-red-200">
      <CheckoutDropDown
        addresslist={addressList}
        setCurrentAddress={setCurrentAddress}
      />
      <div className="w-full mx-auto max-w-[26rem]">
        <div className="flex gap-x-4">
          <CustomInput
            type="text"
            changeHandler={() => {}}
            isInputClicked={isFirstNameClicked}
            setIsInputClicked={setIsFirstNameClicked}
            placeholderText="First Name"
            inputName="firstName"
            labelText="First Name"
            labelHTMLForTag="firstName"
            value={currentAddress.firstName}
          />
          <CustomInput
            type="text"
            changeHandler={() => {}}
            isInputClicked={isLastNameClicked}
            setIsInputClicked={setIsLastNameClicked}
            placeholderText="Last Name"
            inputName="lastName"
            labelText="Last Name"
            labelHTMLForTag="lastName"
            value={currentAddress.lastName}
          />
        </div>
      </div>

      <CustomInput
        type="text"
        changeHandler={() => {}}
        isInputClicked={isAddressClicked}
        setIsInputClicked={setIsAddressClicked}
        placeholderText="Address"
        inputName="address"
        labelText="Address"
        labelHTMLForTag="address"
        value={currentAddress.address}
      />

      <div>
        <CustomInput
          type="text"
          changeHandler={() => {}}
          isInputClicked={isCityClicked}
          setIsInputClicked={setIsCityClicked}
          placeholderText="City"
          inputName="city"
          labelText="City"
          labelHTMLForTag="city"
          value={currentAddress.city}
        />
        <CustomInput
          type="text"
          changeHandler={() => {}}
          isInputClicked={isZipCodeClicked}
          setIsInputClicked={setIsZipCodeClicked}
          placeholderText="ZIP code"
          inputName="zipCode"
          labelText="ZIP code"
          labelHTMLForTag="zipCode"
          value={currentAddress.zipCode}
        />
      </div>

      <CustomInput
        type="text"
        changeHandler={() => {}}
        isInputClicked={isPhoneClicked}
        setIsInputClicked={setIsPhoneClicked}
        placeholderText="First Name"
        inputName="firstName"
        labelText="First Name"
        labelHTMLForTag="firstName"
      />
    </div>
  );
};
export default CheckoutAddress;
