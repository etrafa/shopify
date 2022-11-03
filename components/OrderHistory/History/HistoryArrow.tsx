import { SetStateAction } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../../../Utilities/Icons/Icons";

interface HistoryArrowProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<SetStateAction<boolean>>;
}

const HistoryArrow = ({
  isDropdownOpen,
  setIsDropdownOpen,
}: HistoryArrowProps) => {
  return (
    <section className="w-8 h-8 bg-[#F0F0F0] rounded-full p-[4px] cursor-pointer">
      {isDropdownOpen ? (
        <ArrowUpIcon clickHandler={() => setIsDropdownOpen(false)} />
      ) : (
        <ArrowDownIcon clickHandler={() => setIsDropdownOpen(true)} />
      )}
    </section>
  );
};
export default HistoryArrow;
