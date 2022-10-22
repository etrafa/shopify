import { Dispatch, SetStateAction } from "react";
import { AddressProps } from "../../../src/features/addressSlicer";

interface CheckoutDropDownProps {
  addresslist: AddressProps[];
  setCurrentAddress: Dispatch<SetStateAction<AddressProps>>;
}

const CheckoutDropDown = (props: CheckoutDropDownProps) => {
  return (
    <div>
      <h2 className="text-center mt-12">Shipping Address</h2>
      <select className="border h-12 border-black pl-2 w-full">
        {props.addresslist.map((address) => (
          <option key={address.id}>
            {address.address}, {address.city}, {address.country}
          </option>
        ))}
        <option>Use a new address</option>
      </select>
    </div>
  );
};
export default CheckoutDropDown;
