import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { AddressProps } from "../../../src/features/addressSlicer";

interface CheckoutDropDownProps {
  addresslist: AddressProps[];
  setCurrentAddress: Dispatch<SetStateAction<AddressProps>>;
}

const CheckoutDropDown = (props: CheckoutDropDownProps) => {
  const dropDownAddressChangeHandler = (
    e: ChangeEvent<HTMLSelectElement>,
    setCurrentAddress: Dispatch<SetStateAction<AddressProps>>
  ) => {
    if (e.target.value === "new-address") {
      setCurrentAddress({
        address: "",
        city: "",
        country: "",
        firstName: "",
        id: "",
        lastName: "",
        phone: "",
        state: "",
        zipCode: "",
      });
    } else {
      setCurrentAddress(JSON.parse(e.target.value));
    }
  };

  return (
    <select
      onChange={(e) => dropDownAddressChangeHandler(e, props.setCurrentAddress)}
      className="border h-12 border-gray-300 pl-2 w-full"
    >
      {props.addresslist.map((address) => (
        <option key={address.id} value={JSON.stringify(address)}>
          {address.address}, {address.city}, {address.country}
        </option>
      ))}
      <option value="new-address">Use a new address</option>
    </select>
  );
};
export default CheckoutDropDown;
