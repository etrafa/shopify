import CustomInput from "../../Utilities/Input/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import {
  USA_STATE_LIST,
  CANADA_PROVINCES,
  COUNTRY_LIST,
  GERMANY_STATES,
} from "./COUNTRY_LISTS";

import { useAuth } from "../../firebase/firabaseConfig";
import { useAppDispatch } from "../../src/store";
import {
  addUserAddress,
  ADD_USER_ADDRESS,
  CLOSE_NEW_ADDRESS,
} from "../../src/features/addressSlicer";

const AddressForm = () => {
  const [firstNameInputClicked, setFirstNameInputClicked] = useState(false);
  const [lastNameInputClicked, setLastNameInputClicked] = useState(false);
  const [addressInputClicked, setAddressInputClicked] = useState(false);
  const [cityInputClicked, setCityInputClicked] = useState(false);
  const [zipCodeInputClicked, setZipCodeInputClicked] = useState(false);
  const [phoneInputClicked, setPhoneInputClicked] = useState(false);

  const dispatch = useAppDispatch();
  const currentUser = useAuth();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      country: "United States",
      state: "Alabama",
      zipCode: "",
      phone: "",
      id: "",
    },

    validationSchema: yup.object({
      firstName: yup.string().required("This area is required"),
      lastName: yup.string().required("This area is required"),
      address: yup.string().required("This area is required"),
      city: yup.string().required("This area is required"),
      zipCode: yup.string().required("This area is required").min(3).max(5),
      phone: yup.number().required("This area is required"),
    }),

    onSubmit: async (values) => {
      //*on submit create a new address.
      if (currentUser) {
        dispatch(ADD_USER_ADDRESS(values));
        dispatch(addUserAddress({ userID: currentUser?.uid, address: values }));
        dispatch(CLOSE_NEW_ADDRESS());
      }
    },
  });

  return (
    <form className="my-6 w-11/12 mx-auto" onSubmit={formik.handleSubmit}>
      <div className="flex mx-auto max-w-[26rem] gap-x-4">
        <CustomInput
          inputName="firstName"
          changeHandler={formik.handleChange}
          type="text"
          formikErrorMessage={formik.errors.firstName}
          placeholderText="First Name"
          isFormikTouched={formik.touched.firstName}
          labelHTMLForTag="firstName"
          labelText="First Name"
          value={formik.values.firstName}
          isInputClicked={firstNameInputClicked}
          setIsInputClicked={setFirstNameInputClicked}
        />
        <CustomInput
          inputName="lastName"
          changeHandler={formik.handleChange}
          type="text"
          formikErrorMessage={formik.errors.lastName}
          placeholderText="Last Name"
          isFormikTouched={formik.touched.lastName}
          labelHTMLForTag="lastName"
          labelText="Last Name"
          value={formik.values.lastName}
          isInputClicked={lastNameInputClicked}
          setIsInputClicked={setLastNameInputClicked}
        />
      </div>
      <CustomInput
        inputName="address"
        changeHandler={formik.handleChange}
        type="text"
        formikErrorMessage={formik.errors.address}
        placeholderText="Address"
        isFormikTouched={formik.touched.address}
        labelHTMLForTag="address"
        labelText="Address"
        value={formik.values.address}
        isInputClicked={addressInputClicked}
        setIsInputClicked={setAddressInputClicked}
      />
      <CustomInput
        inputName="city"
        changeHandler={formik.handleChange}
        type="text"
        formikErrorMessage={formik.errors.city}
        placeholderText="City"
        isFormikTouched={formik.touched.city}
        labelHTMLForTag="city"
        labelText="City"
        value={formik.values.city}
        isInputClicked={cityInputClicked}
        setIsInputClicked={setCityInputClicked}
      />
      <div className=" w-full max-w-[26rem]  mx-auto flex flex-col">
        <label className="text-button-text py-2">Country/Region</label>
        <select
          className="border h-12 border-black pl-2"
          name="country"
          id="country"
          value={formik.values.country}
          onChange={formik.handleChange}
        >
          {COUNTRY_LIST.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {formik.values.country === "United States" && (
          <select
            className="border h-12 border-black pl-2 mt-4"
            name="state"
            id="state"
            value={formik.values.state}
            onChange={formik.handleChange}
          >
            {USA_STATE_LIST.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        )}
        {formik.values.country === "Canada" && (
          <select
            className="border h-12 border-black pl-2 mt-4"
            name="state"
            id="state"
            value={formik.values.state}
            onChange={formik.handleChange}
          >
            {CANADA_PROVINCES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        )}
        {formik.values.country === "Germany" && (
          <select
            className="border h-12 border-black pl-2 mt-4"
            name="state"
            id="state"
            value={formik.values.state}
            onChange={formik.handleChange}
          >
            {GERMANY_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        )}
      </div>
      <CustomInput
        inputName="zipCode"
        changeHandler={formik.handleChange}
        type="tel"
        formikErrorMessage={formik.errors.zipCode}
        placeholderText="Zip code"
        isFormikTouched={formik.touched.zipCode}
        labelHTMLForTag="zipCode"
        labelText="Zip code"
        value={formik.values.zipCode}
        isInputClicked={zipCodeInputClicked}
        setIsInputClicked={setZipCodeInputClicked}
      />
      <CustomInput
        inputName="phone"
        changeHandler={formik.handleChange}
        type="text"
        formikErrorMessage={formik.errors.phone}
        placeholderText="Phone"
        isFormikTouched={formik.touched.phone}
        labelHTMLForTag="phone"
        labelText="Phone"
        value={formik.values.phone}
        isInputClicked={phoneInputClicked}
        setIsInputClicked={setPhoneInputClicked}
      />
      <div className="flex mx-auto max-w-[26rem] gap-x-4">
        <button
          type="submit"
          className="border w-44 h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text block mx-auto mt-6"
        >
          Add address
        </button>
        <button
          onClick={() => dispatch(CLOSE_NEW_ADDRESS())}
          type="reset"
          className="border w-44 h-12 border-black text-sm tracking-widest hover:scale-105 ease-in-out text-button-text block mx-auto mt-6"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default AddressForm;
