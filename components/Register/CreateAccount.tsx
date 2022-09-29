import { useState } from "react";
import CustomInput from "../../Utilities/Input/CustomInput";

const CreateAccount = () => {
  const [firstNameInputClicked, setFirstNameInputClicked] = useState(false);
  const [lastNameInputClicked, setLastNameInputClicked] = useState(false);
  const [emailInputClicked, setEmailInputClicked] = useState(false);
  const [passwordInputClicked, setPasswordInputClicked] = useState(false);

  return (
    <div className="mt-14 min-h-[50vh] text-center">
      <h1 className="text-border text-5xl text-buttonText text-center">
        Create Account
      </h1>
      <form className="px-8 py-8 w-11/12 mx-auto max-w-3xl">
        <CustomInput
          type="text"
          changeHandler={() => console.log("hey")}
          isInputClicked={firstNameInputClicked}
          setIsInputClicked={setFirstNameInputClicked}
          placeholderText="First Name"
          inputName="firstName"
          labelText="First Name"
          labelHTMLForTag="firstName"
        />
        <CustomInput
          type="text"
          changeHandler={() => console.log("hey")}
          isInputClicked={lastNameInputClicked}
          setIsInputClicked={setLastNameInputClicked}
          placeholderText="Last Name"
          inputName="lastName"
          labelText="Last Name"
          labelHTMLForTag="lastName"
        />
        <CustomInput
          type="text"
          changeHandler={() => console.log("hey")}
          isInputClicked={emailInputClicked}
          setIsInputClicked={setEmailInputClicked}
          placeholderText="Email"
          inputName="email"
          labelText="Email"
          labelHTMLForTag="email"
        />
        <CustomInput
          type="password"
          changeHandler={() => console.log("hey")}
          isInputClicked={passwordInputClicked}
          setIsInputClicked={setPasswordInputClicked}
          placeholderText="Password"
          inputName="password"
          labelText="Password"
          labelHTMLForTag="password"
        />
        <button className="border w-44 h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text">
          Create
        </button>
      </form>
    </div>
  );
};
export default CreateAccount;
