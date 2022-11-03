import { IOrderHistory } from "../../../interfaces/IOrderHistory";
import DropdownBillingInformation from "./DropdownBillingInformation";
import DropDownHeader from "./DropDownHeader";
import DropdownShippingInformation from "./DropdownShippingInformation";

const Dropdown = (props: IOrderHistory) => {
  return (
    <div className="w-full border-black my-12">
      <DropDownHeader {...props} />
      <section className="flex flex-col md:flex-row w-full gap-x-2 mt-12">
        <DropdownShippingInformation {...props} />
        <DropdownBillingInformation {...props} />
      </section>
    </div>
  );
};
export default Dropdown;
