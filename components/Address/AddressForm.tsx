import CustomInput from "../../Utilities/Input/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { USA_STATE_LIST } from "./usStateLists";

const AddressForm = () => {
  const [firstNameInputClicked, setFirstNameInputClicked] = useState(false);
  const [lastNameInputClicked, setLastNameInputClicked] = useState(false);
  const [addressInputClicked, setAddressInputClicked] = useState(false);
  const [cityInputClicked, setCityInputClicked] = useState(false);
  const [countryInputClicked, setCountryInputClicked] = useState(false);
  const [provinceInputClicked, setProvinceInputClicked] = useState(false);
  const [zipCodeInputClicked, setZipCodeInputClicked] = useState(false);
  const [phoneInputClicked, setPhoneInputClicked] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      country: "",
      province: "",
      zipCode: "",
      phone: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().required("Enter your first name"),
      lastName: yup.string().required("Enter your last name"),
      email: yup.string().email().required("Enter your email address."),
      address: yup.string().required("Enter your address"),
      city: yup.string().required("Enter your city"),
      country: yup.string().required("Enter your country."),
      province: yup.string().required("Enter your province."),
      zipCode: yup.number().required("Only digits are allowed.").max(5),
      phone: yup.string().required("Enter your phone."),
    }),
    onSubmit: async (values) => {
      //*on submit create a new address.
      console.log(values);
    },
  });

  return (
    <form>
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
        <label className="text-button-text pl-2">States</label>
        <select
          className="border h-12 border-black pl-2"
          name="state"
          id="state"
        >
          {USA_STATE_LIST.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
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
          type="submit"
          className="border w-44 h-12 border-black text-sm tracking-widest hover:scale-105 ease-in-out text-button-text block mx-auto mt-6"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default AddressForm;