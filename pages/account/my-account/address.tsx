import { useState } from "react";
import AddressForm from "../../../components/Address/AddressForm";

const Address = () => {
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  return (
    <div className="w-full mt-14 min-h-[50vh]">
      <h1 className="text-border text-2xl font-bold text-zinc-700 text-center">
        Addresses
      </h1>
      <button
        onClick={() => setIsAddressOpen(!isAddressOpen)}
        className="border w-44 h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text block mx-auto mt-6"
      >
        Add a new address
      </button>
      {/* {if addressOpen show this component} */}
      {isAddressOpen && <AddressForm />}
    </div>
  );
};
export default Address;
