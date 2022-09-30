import { useFormik } from "formik";
import { useState } from "react";
import { signUpWithEmail } from "../../firebase/FirebaseAuthFunctions/signUpWithEmail";
import CustomInput from "../../Utilities/Input/CustomInput";
import * as yup from "yup";

const CreateAccount = () => {
  //this states are necessary for appyling CSS Animation
  const [firstNameInputClicked, setFirstNameInputClicked] = useState(false);
  const [lastNameInputClicked, setLastNameInputClicked] = useState(false);
  const [emailInputClicked, setEmailInputClicked] = useState(false);
  const [passwordInputClicked, setPasswordInputClicked] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().required("Enter your first name"),
      lastName: yup.string().required("Enter your last name"),
      email: yup.string().email().required("Enter your email address."),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters.")
        .required("Enter your password."),
    }),
    onSubmit: async (values) => {
      //*on submit create a new account
      signUpWithEmail(
        values.firstName,
        values.lastName,
        values.email,
        values.password
      );
    },
  });

  return (
    <div className="mt-14 min-h-[50vh] text-center">
      <h1 className="text-border text-5xl text-buttonText text-center">
        Create Account
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="px-8 py-8 w-11/12 mx-auto max-w-3xl"
      >
        <CustomInput
          type="text"
          value={formik.values.firstName}
          changeHandler={formik.handleChange}
          isInputClicked={firstNameInputClicked}
          setIsInputClicked={setFirstNameInputClicked}
          placeholderText="First Name"
          inputName="firstName"
          labelText="First Name"
          labelHTMLForTag="firstName"
          isFormikTouched={formik.touched.firstName}
          formikErrorMessage={formik.errors.firstName}
        />

        <CustomInput
          type="text"
          value={formik.values.lastName}
          changeHandler={formik.handleChange}
          isInputClicked={lastNameInputClicked}
          setIsInputClicked={setLastNameInputClicked}
          placeholderText="Last Name"
          inputName="lastName"
          labelText="Last Name"
          labelHTMLForTag="lastName"
          isFormikTouched={formik.touched.lastName}
          formikErrorMessage={formik.errors.lastName}
        />
        <CustomInput
          type="text"
          value={formik.values.email}
          changeHandler={formik.handleChange}
          isInputClicked={emailInputClicked}
          setIsInputClicked={setEmailInputClicked}
          placeholderText="Email"
          inputName="email"
          labelText="Email"
          labelHTMLForTag="email"
          isFormikTouched={formik.touched.email}
          formikErrorMessage={formik.errors.email}
        />
        <CustomInput
          type="password"
          value={formik.values.password}
          changeHandler={formik.handleChange}
          isInputClicked={passwordInputClicked}
          setIsInputClicked={setPasswordInputClicked}
          placeholderText="Password"
          inputName="password"
          labelText="Password"
          labelHTMLForTag="password"
          isFormikTouched={formik.touched.password}
          formikErrorMessage={formik.errors.password}
        />
        <button
          type="submit"
          className="border w-44 h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text"
        >
          Create
        </button>
      </form>
    </div>
  );
};
export default CreateAccount;
