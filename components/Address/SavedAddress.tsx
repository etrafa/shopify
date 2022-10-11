import { useEffect } from "react";
import { useAuth } from "../../firebase/firabaseConfig";
import { getUserAddress } from "../../src/features/addressSlicer";
import { useAppDispatch, useAppSelector } from "../../src/store";
import { DeleteIcon } from "../../Utilities/Icons/Icons";

const SavedAddress = () => {
  const dispatch = useAppDispatch();
  const { addressList } = useAppSelector((store) => store.address);
  const currentUser = useAuth();

  useEffect(() => {
    if (currentUser) {
      dispatch(getUserAddress(currentUser.uid));
    }

    console.log(addressList);
  }, [currentUser, dispatch, addressList.length]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 w-full mt-6 max-w-screen-lg md:mx-auto gap-y-4">
      {addressList &&
        addressList.map((address) => {
          return (
            <div className="border mx-auto w-11/12" key={address?.address}>
              <h2 className="opacity-70 text-center my-4 font-bold">
                {address.firstName + " " + address.lastName}
              </h2>
              <p className="px-4 opacity-70 text-sm text-center my-4">
                {address.address + " " + address.city}
              </p>
              <p className="px-4 opacity-70 text-sm text-center my-4">
                {address.state + " " + address.zipCode}
              </p>
              <p className="px-4 opacity-70 text-sm text-center">
                {address.phone}
              </p>
              <div className=" ml-auto w-full flex justify-end pr-6 opacity-70 hover:opacity-60 cursor-pointer my-4">
                <DeleteIcon clickHandler={() => {}} />
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default SavedAddress;
