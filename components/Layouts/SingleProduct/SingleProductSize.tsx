import { useState } from "react";
import { changeSize } from "../../../src/features/cartSlicer";
import { useAppDispatch, useAppSelector } from "../../../src/store";

const SingleProductSize = () => {
  const dispatch = useAppDispatch();

  const { value } = useAppSelector((store) => store.cart);

  const [activeSize, setActiveSize] = useState(value.size);

  return (
    <div>
      <p className="text-button-text text-sm mt-8 pl-4">Size</p>
      <ul className="flex gap-x-4 p-4">
        <li
          className={
            activeSize === "S"
              ? "h-7 w-7 border border-light-gray text-center cursor-pointer bg-gray-300"
              : "h-7 w-7 border border-light-gray text-center cursor-pointer"
          }
        >
          <label className="text-sm inline-block w-full h-full cursor-pointer">
            S
            <input
              onChange={(e) => {
                dispatch(changeSize(e.target.value));
                setActiveSize(e.target.value);
              }}
              type="radio"
              name="size"
              value="S"
              className="hidden"
            />
          </label>
        </li>
        <li
          className={
            activeSize === "M"
              ? "h-7 w-7 border border-light-gray text-center cursor-pointer bg-gray-300"
              : "h-7 w-7 border border-light-gray text-center cursor-pointer"
          }
        >
          <label className="text-sm inline-block w-full h-full cursor-pointer">
            M
            <input
              onChange={(e) => {
                dispatch(changeSize(e.target.value));
                setActiveSize(e.target.value);
              }}
              type="radio"
              name="size"
              value="M"
              className="hidden"
            />
          </label>
        </li>
        <li
          className={
            activeSize === "L"
              ? "h-7 w-7 border border-light-gray text-center cursor-pointer bg-gray-300"
              : "h-7 w-7 border border-light-gray text-center cursor-pointer"
          }
        >
          <label className="text-sm inline-block w-full h-full cursor-pointer">
            L
            <input
              onChange={(e) => {
                dispatch(changeSize(e.target.value));
                setActiveSize(e.target.value);
              }}
              type="radio"
              name="size"
              value="L"
              className="hidden"
            />
          </label>
        </li>
        <li
          className={
            activeSize === "XL"
              ? "h-7 w-7 border border-light-gray text-center cursor-pointer bg-gray-300"
              : "h-7 w-7 border border-light-gray text-center cursor-pointer"
          }
        >
          <label className="text-sm inline-block w-full h-full cursor-pointer">
            XL
            <input
              onChange={(e) => {
                dispatch(changeSize(e.target.value));
                setActiveSize(e.target.value);
              }}
              type="radio"
              name="size"
              value="XL"
              className="hidden"
            />
          </label>
        </li>
      </ul>
    </div>
  );
};
export default SingleProductSize;
