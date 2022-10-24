import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { firebaseSignIn } from "../../firebase/FirebaseAuthFunctions/signInWithEmail";
import CustomInput from "../../Utilities/Input/CustomInput";

const Login = () => {
  const [customerLoginInformation, setCustomerLoginInformation] = useState({
    customerEmail: "",
    customerPassword: "",
  });

  const [emailInputClicked, setEmailInputClicked] = useState(false);
  const [passwordInputClicked, setPasswordInputClicked] = useState(false);

  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Your password is wrong.");

  //save user's input into the CUSTOMER_LOGIN_INFORMATION STATE
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newInput = { [e.target.name]: e.target.value };
    setCustomerLoginInformation({ ...customerLoginInformation, ...newInput });
    setDisplayErrorMessage(false);
  };

  //login function
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    firebaseSignIn(
      customerLoginInformation.customerEmail,
      customerLoginInformation.customerPassword,
      router,
      setDisplayErrorMessage,
      setErrorMessage
    );
  };

  const router = useRouter();

  return (
    <div className="mt-14 min-h-[50vh] text-center">
      <h1 className="text-border text-5xl text-buttonText text-center">
        Login
      </h1>
      <form className="px-8 py-8 w-11/12 mx-auto max-w-3xl">
        <CustomInput
          type="email"
          changeHandler={changeHandler}
          isInputClicked={emailInputClicked}
          setIsInputClicked={setEmailInputClicked}
          placeholderText="Email"
          inputName="customerEmail"
          labelText="Email"
          labelHTMLForTag="customerEmail"
        />
        <CustomInput
          type="password"
          changeHandler={changeHandler}
          isInputClicked={passwordInputClicked}
          setIsInputClicked={setPasswordInputClicked}
          placeholderText="Password"
          inputName="customerPassword"
          labelText="Password"
          labelHTMLForTag="customerPassword"
        />
        {displayErrorMessage && (
          <p className="w-full max-w-[26rem] mx-auto text-left pb-6 text-main-red">
            {errorMessage}
          </p>
        )}
        <button
          onClick={clickHandler}
          className="border w-44 h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text"
        >
          Sign in
        </button>
      </form>
      <Link href="/account/register">
        <p className="text-xs text-button-text font-bold tracking-widest underline underline-offset-4 cursor-pointer decoration-slate-600 hover:decoration-black hover:decoration-2">
          Create Account
        </p>
      </Link>
    </div>
  );
};
export default Login;
