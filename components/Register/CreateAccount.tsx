import { ChangeEvent, MouseEvent, useState } from "react";
import { signUpWithEmail } from "../../firebase/sign-up/signUpWithEmail";
import CustomInput from "../../Utilities/Input/CustomInput";

const CreateAccount = () => {
  const [firstNameInputClicked, setFirstNameInputClicked] = useState(false);
  const [lastNameInputClicked, setLastNameInputClicked] = useState(false);
  const [emailInputClicked, setEmailInputClicked] = useState(false);
  const [passwordInputClicked, setPasswordInputClicked] = useState(false);

  const [newCustomerInformation, setNewCustomerInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //*Onchange save user's input to create a new account.
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newInput = { [e.target.name]: e.target.value };
    setNewCustomerInformation({ ...newCustomerInformation, ...newInput });
  };

  //* when submit the form create a new user.
  const createAccount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signUpWithEmail(
      newCustomerInformation.firstName,
      newCustomerInformation.lastName,
      newCustomerInformation.email,
      newCustomerInformation.password
    );
  };

  return (
    <div className="mt-14 min-h-[50vh] text-center">
      <h1 className="text-border text-5xl text-buttonText text-center">
        Create Account
      </h1>
      <form className="px-8 py-8 w-11/12 mx-auto max-w-3xl">
        <CustomInput
          type="text"
          changeHandler={changeHandler}
          isInputClicked={firstNameInputClicked}
          setIsInputClicked={setFirstNameInputClicked}
          placeholderText="First Name"
          inputName="firstName"
          labelText="First Name"
          labelHTMLForTag="firstName"
        />
        <CustomInput
          type="text"
          changeHandler={changeHandler}
          isInputClicked={lastNameInputClicked}
          setIsInputClicked={setLastNameInputClicked}
          placeholderText="Last Name"
          inputName="lastName"
          labelText="Last Name"
          labelHTMLForTag="lastName"
        />
        <CustomInput
          type="text"
          changeHandler={changeHandler}
          isInputClicked={emailInputClicked}
          setIsInputClicked={setEmailInputClicked}
          placeholderText="Email"
          inputName="email"
          labelText="Email"
          labelHTMLForTag="email"
        />
        <CustomInput
          type="password"
          changeHandler={changeHandler}
          isInputClicked={passwordInputClicked}
          setIsInputClicked={setPasswordInputClicked}
          placeholderText="Password"
          inputName="password"
          labelText="Password"
          labelHTMLForTag="password"
        />
        <button
          onClick={createAccount}
          className="border w-44 h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text"
        >
          Create
        </button>
      </form>
    </div>
  );
};
export default CreateAccount;
