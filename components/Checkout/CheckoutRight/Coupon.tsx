import React, { useEffect, useState } from "react";
import { applyDiscount } from "../../../src/features/cartSlicer";
import { useAppDispatch, useAppSelector } from "../../../src/store";
import CustomInput from "../../../Utilities/Input/CustomInput";

const Coupon = () => {
  const [isCouponClicked, setIsCouponClicked] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const { isDiscountApplied } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  const couponHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (couponInput === "WINTER2022") dispatch(applyDiscount(10));
  };

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
        {isDiscountApplied && (
          <button className="w-4/12 h-12 mt-4 border bg-dark-gray opacity-40 ml-4 rounded-md text-white text-sm font-bold tracking-widest pointer-events-none line-through decoration-black decoration-2">
            Apply
          </button>
        )}
        {!isDiscountApplied && (
          <button
            onClick={(e) => couponHandler(e)}
            className={
              couponInput.length >= 5
                ? "w-4/12 h-12 mt-4 border bg-dark-gray ml-4 rounded-md text-white text-sm font-bold tracking-widest cursor-pointer"
                : "w-4/12 h-12 mt-4 border bg-dark-gray opacity-40 ml-4 rounded-md text-white text-sm font-bold tracking-widest pointer-events-none"
            }
          >
            Apply
          </button>
        )}
      </div>
      <h2 className="font-semibold opacity-70 mt-3 mb-6">
        Use WINTER2022 to get $10 discount!
      </h2>
    </div>
  );
};
export default Coupon;
