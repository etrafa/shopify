import React, { ChangeEvent } from "react";
import styles from "./CustomInput.module.css";

interface CustomInputProps {
  type: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  isInputClicked: boolean;
  setIsInputClicked: React.Dispatch<React.SetStateAction<boolean>>;
  placeholderText: string;
  inputName: string;
  labelHTMLForTag: string;
  labelText: string;
  value?: string | number;
  isFormikTouched?: boolean | undefined;
  formikErrorMessage?: string | undefined;
}

const CustomInput = (props: CustomInputProps) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type={props.type}
        onChange={(e) => props.changeHandler(e)}
        onFocus={(e) => {
          e.target.placeholder = "";
          props.setIsInputClicked(true);
        }}
        onBlur={(e) => {
          e.target.placeholder = props.placeholderText;
          props.setIsInputClicked(false);
          if (e.target.value.length >= 1) {
            props.setIsInputClicked(true);
          }
        }}
        name={props.inputName}
        value={props.value}
        placeholder={props.placeholderText}
      />
      <label
        className={
          props.isInputClicked
            ? styles.inputLabelActive
            : styles.inputLabelDisabled
        }
        htmlFor={props.labelHTMLForTag}
      >
        {props.labelText}
      </label>
      {props.isFormikTouched && props.formikErrorMessage && (
        <p className={styles.errorMessage}>{props.formikErrorMessage}</p>
      )}
    </div>
  );
};
export default CustomInput;
