import { useEffect, useState } from "react";
import CustomInput from "../../../Utilities/Input/CustomInput";

const Coupon = () => {
  const [isCouponClicked, setIsCouponClicked] = useState(false);
  const [couponInput, setCouponInput] = useState("");

  return (
    <div>
      <div className="w-full flex">
        <CustomInput
          changeHandler={(e) => setCouponInput(e.target.value)}
          inputName="discount"
          isInputClicked={isCouponClicked}
          setIsInputClicked={setIsCouponClicked}
          labelHTMLForTag="coupon"
          labelText="Gift card or discount code"
          placeholderText="Gift card or discount code"
          type="text"
        />
        <button
          className={
            couponInput.length >= 5
              ? "w-4/12 h-12 mt-4 border bg-dark-gray ml-4 rounded-md text-white text-sm font-bold tracking-widest cursor-pointer"
              : "w-4/12 h-12 mt-4 border bg-dark-gray opacity-40 ml-4 rounded-md text-white text-sm font-bold tracking-widest pointer-events-none"
          }
        >
          Apply
        </button>
      </div>
    </div>
  );
};
export default Coupon;
