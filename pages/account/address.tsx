import { useEffect, useState } from "react";
import AddressForm from "../../components/Address/AddressForm";
import SavedAddress from "../../components/Address/SavedAddress";
import { useAuth } from "../../firebase/firabaseConfig";
import { getUserAddress } from "../../src/features/addressSlicer";
import { useAppDispatch, useAppSelector } from "../../src/store";

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
      {isAddressOpen && <AddressForm />}
      <SavedAddress />
      {/* {if addressOpen show this component} */}
    </div>
  );
};
export default Address;
