import { ChangeEvent, MouseEvent, useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [customerLoginInformation, setCustomerLoginInformation] = useState({
    customerEmail: "",
    customerPassword: "",
  });

  const [emailInputClicked, setEmailInputClicked] = useState(false);
  const [passwordInputClicked, setPasswordInputClicked] = useState(false);

  //save user's input into the CUSTOMER_LOGIN_INFORMATION STATE
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newInput = { [e.target.name]: e.target.value };
    setCustomerLoginInformation({ ...customerLoginInformation, ...newInput });
  };

  //login function
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(customerLoginInformation);
  };

  return (
    <div className="mt-14 min-h-[50vh] text-center">
      <h1 className="text-border text-5xl text-buttonText text-center">
        Login
      </h1>
      <form className="px-8 py-8 w-11/12 mx-auto max-w-3xl">
        <div className={styles.loginContainer}>
          <input
            className={styles.loginInput}
            type="text"
            onChange={changeHandler}
            onFocus={(e) => {
              e.target.placeholder = "";

              setEmailInputClicked(true);
            }}
            onBlur={(e) => {
              e.target.placeholder = "Email";
              setEmailInputClicked(false);
              if (e.target.value.length >= 1) {
                setEmailInputClicked(true);
              }
            }}
            name="customerEmail"
            placeholder="Email"
          />
          <label
            className={
              emailInputClicked
                ? styles.loginLabelActive
                : styles.loginLabelDisabled
            }
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div className={styles.loginContainer}>
          <input
            className={styles.loginInput}
            type="password"
            onChange={changeHandler}
            onFocus={(e) => {
              e.target.placeholder = "";
              setPasswordInputClicked(true);
            }}
            onBlur={(e) => {
              e.target.placeholder = "Password";
              setPasswordInputClicked(false);
              if (e.target.value.length >= 1) {
                setPasswordInputClicked(true);
              }
            }}
            name="customerPassword"
            placeholder="Password"
          />
          <label
            className={
              passwordInputClicked
                ? styles.loginLabelActive
                : styles.loginLabelDisabled
            }
            htmlFor="customerPassword"
          >
            Password
          </label>
        </div>
        <button className="border w-44 h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text">
          Sign in
        </button>
      </form>
      <p className="text-xs text-button-text font-bold tracking-widest underline underline-offset-4 cursor-pointer decoration-slate-600 hover:decoration-black hover:decoration-2">
        Create Account
      </p>
    </div>
  );
};
export default Login;
