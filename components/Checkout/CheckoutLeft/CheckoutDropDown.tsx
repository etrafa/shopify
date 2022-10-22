import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { AddressProps } from "../../../src/features/addressSlicer";

interface CheckoutDropDownProps {
  addresslist: AddressProps[];
  setCurrentAddress: Dispatch<SetStateAction<AddressProps>>;
}

const addressChangeHandler = (
  e: ChangeEvent<HTMLSelectElement>,
  setAddress: Dispatch<SetStateAction<AddressProps>>
) => {
  if (e.target.value === "new-address") {
    setAddress({
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
    setAddress(JSON.parse(e.target.value));
  }
};

const CheckoutDropDown = (props: CheckoutDropDownProps) => {
  return (
    <div>
      <h2 className="text-center mt-12">Shipping Address</h2>
      <select
        // onChange={(e) => props.setCurrentAddress(JSON.parse(e.target.value))}
        onChange={(e) => addressChangeHandler(e, props.setCurrentAddress)}
        className="border h-12 border-black pl-2 w-full"
      >
        {props.addresslist.map((address) => (
          <option key={address.id} value={JSON.stringify(address)}>
            {address.address}, {address.city}, {address.country}
          </option>
        ))}
        <option value="new-address">Use a new address</option>
      </select>
    </div>
  );
};
export default CheckoutDropDown;
