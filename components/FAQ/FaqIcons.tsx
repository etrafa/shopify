interface FaqIconsProps {
  clickHandler: () => void;
}

export const FaqPlusIcon = ({ clickHandler }: FaqIconsProps) => {
  return (
    <svg
      onClick={clickHandler}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 mr-4 cursor-pointer hidden md:block absolute top-1/2 transform -translate-y-1/2 right-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export const FaqMinusIcon = ({ clickHandler }: FaqIconsProps) => {
  return (
    <svg
      onClick={clickHandler}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 mr-4 cursor-pointer hidden md:block absolute top-1/2 transform -translate-y-1/2 right-0"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
    </svg>
  );
};
