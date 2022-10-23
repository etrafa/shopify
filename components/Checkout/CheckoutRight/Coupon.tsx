import { useState } from "react";
import CustomInput from "../../../Utilities/Input/CustomInput";

const Coupon = () => {
  const [isCouponClicked, setIsCouponClicked] = useState(false);

  return (
    <div>
      <div className="w-full flex">
        <CustomInput
          changeHandler={() => {}}
          inputName="discount"
          isInputClicked={isCouponClicked}
          setIsInputClicked={setIsCouponClicked}
          labelHTMLForTag="coupon"
          labelText="Gift card or discount code"
          placeholderText="Gift card or discount code"
          type="text"
        />
        <button className="w-4/12 h-12 mt-4 border bg-dark-gray ml-4 rounded-md text-white text-sm font-bold tracking-widest">
          Apply
        </button>
      </div>
    </div>
  );
};
export default Coupon;
