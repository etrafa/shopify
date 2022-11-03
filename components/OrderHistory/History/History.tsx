import { SetStateAction, useState } from "react";
import { IOrderHistory } from "../../../interfaces/IOrderHistory";
import HistoryArrow from "./HistoryArrow";
import HistoryDetails from "./HistoryDetails";
import HistoryImage from "./HistoryImage";
import HistoryPayment from "./HistoryPayment";
import HistoryStatus from "./HistoryStatus";

interface HistoryProps extends IOrderHistory {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<SetStateAction<boolean>>;
}

const History = (props: HistoryProps) => {
  return (
    <div className="flex  justify-between items-center px-2 md:px-4 lg:h-20 my-4">
      <HistoryImage {...props} />
      <HistoryDetails {...props} />
      <HistoryStatus />
      <HistoryPayment {...props} />
      <HistoryArrow
        isDropdownOpen={props.isDropdownOpen}
        setIsDropdownOpen={props.setIsDropdownOpen}
      />
    </div>
  );
};
export default History;
