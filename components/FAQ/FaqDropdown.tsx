import { useState } from "react";
import { FaqMinusIcon, FaqPlusIcon } from "./FaqIcons";

interface FaqDropDownProps {
  question: string;
  answer: string;
}

const FaqDropdown = ({ question, answer }: FaqDropDownProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      onClick={() => setShowAnswer(!showAnswer)}
      className={
        showAnswer
          ? "w-full border bg-gray-50 mb-10 relative"
          : "w-full border bg-gray-50 mb-10 relative"
      }
    >
      <p className="py-4 text-sm leading-7 text-zinc-700 font-bold justify-self-center w-full underline md:no-underline cursor-pointer md:cursor-auto">
        {question}
      </p>
      {showAnswer && (
        <p className="px-10 md:px-20 py-2 text-sm leading-7 text-zinc-700 justify-self-center w-full">
          {answer}
        </p>
      )}
      {showAnswer ? (
        <FaqMinusIcon clickHandler={() => setShowAnswer(!showAnswer)} />
      ) : (
        <FaqPlusIcon clickHandler={() => setShowAnswer(!showAnswer)} />
      )}
    </div>
  );
};
export default FaqDropdown;
