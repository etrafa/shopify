import { IOrderHistory } from "../../../interfaces/IOrderHistory";

const DropdownShippingInformation = (props: IOrderHistory) => {
  return (
    <article className="w-full md:w-6/12 mt-2">
      <div>
        <h2 className="font-bold text-lg text-button-text px-8 my-4">
          Shipping Information
        </h2>
        <summary className="list-none py-2 px-8 text-sm text-button-text">
          {props?.address?.firstName} {props?.address?.lastName}
        </summary>
        <summary className="list-none py-2 px-8 text-sm text-button-text">
          {props?.address?.address} {props?.address?.city}
        </summary>
        <summary className="list-none py-2 px-8 text-sm text-button-text">
          {props?.address?.country}
        </summary>
        <summary className="list-none py-2 px-8 text-sm text-button-text">
          {props?.address?.phone}
        </summary>
      </div>
      <div className="pt-4">
        <h2 className="font-bold text-lg text-button-text px-8 my-4">
          Invoice Information
        </h2>
        <summary className="list-none py-2 px-8 text-xs text-button-text">
          {props?.address?.firstName} {props?.address?.lastName}
        </summary>
        <summary className="list-none py-2 px-8 text-xs text-button-text">
          {props?.address?.address} {props?.address?.city}
        </summary>
        <summary className="list-none py-2 px-8 text-xs text-button-text">
          {props?.address?.country}
        </summary>
        <summary className="list-none py-2 px-8 text-xs text-button-text">
          {props?.address?.phone}
        </summary>
      </div>
    </article>
  );
};
export default DropdownShippingInformation;
