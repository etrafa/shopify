import { useState } from "react";
import CustomInput from "../../../Utilities/Input/CustomInput";
import { USA_STATE_LIST } from "../../Address/usStateLists";

const CheckoutAddress = () => {
  const [isAddressInputClicked, setIsAddressInputClicked] = useState(false);
  const [isFistNameClicked, setIsFistNameClicked] = useState(false);

  return (
    <div className="w-full">
      <h2 className="text-center mt-12">Shipping Address</h2>
      <form className="w-6/12 mx-auto">
        <select className="border h-12 pl-2 w-10/12" name="state" id="state">
          {USA_STATE_LIST.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <CustomInput
          type="text"
          changeHandler={() => {}}
          isInputClicked={isFistNameClicked}
          setIsInputClicked={setIsFistNameClicked}
          placeholderText="First Name"
          inputName="firstName"
          labelText="First Name"
          labelHTMLForTag="firstName"
        />
        <CustomInput
          type="text"
          changeHandler={() => {}}
          isInputClicked={isFistNameClicked}
          setIsInputClicked={setIsFistNameClicked}
          placeholderText="First Name"
          inputName="firstName"
          labelText="First Name"
          labelHTMLForTag="firstName"
        />
        <CustomInput
          type="text"
          changeHandler={() => {}}
          isInputClicked={isFistNameClicked}
          setIsInputClicked={setIsFistNameClicked}
          placeholderText="First Name"
          inputName="firstName"
          labelText="First Name"
          labelHTMLForTag="firstName"
        />
        <CustomInput
          type="text"
          changeHandler={() => {}}
          isInputClicked={isFistNameClicked}
          setIsInputClicked={setIsFistNameClicked}
          placeholderText="First Name"
          inputName="firstName"
          labelText="First Name"
          labelHTMLForTag="firstName"
        />
        <CustomInput
          type="text"
          changeHandler={() => {}}
          isInputClicked={isFistNameClicked}
          setIsInputClicked={setIsFistNameClicked}
          placeholderText="First Name"
          inputName="firstName"
          labelText="First Name"
          labelHTMLForTag="firstName"
        />
        <CustomInput
          type="text"
          changeHandler={() => {}}
          isInputClicked={isFistNameClicked}
          setIsInputClicked={setIsFistNameClicked}
          placeholderText="First Name"
          inputName="firstName"
          labelText="First Name"
          labelHTMLForTag="firstName"
        />
      </form>
    </div>
  );
};
export default CheckoutAddress;
