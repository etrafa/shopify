import { useState } from "react";
import { IOrderHistory } from "../../interfaces/IOrderHistory";
import Dropdown from "./DropDown/Dropdown";
import History from "./History/History";

type AllOrderHistoryProps = IOrderHistory;

const AllOrderHistory = (props: AllOrderHistoryProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-11/12 max-w-screen-lg border mx-auto rounded-md my-6 shadow-sm">
      <History
        {...props}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      {isDropdownOpen && <Dropdown {...props} />}
    </div>
  );
};
export default AllOrderHistory;
