//react
import { useState } from "react";
import KidJersey from "../components/SizeCharts/KidJersey";
import MenJersey from "../components/SizeCharts/MenJersey";
import MenTrainingSuit from "../components/SizeCharts/MenTrainingSuit";
import WomenJersey from "../components/SizeCharts/WomenJersey";

//components

const SizeCharts = () => {
  const [sizeChartOption, setSizeChartOption] = useState("MEN'S JERSEY");

  return (
    <div className="w-full mt-14 min-h-[50vh]">
      <h1 className="text-border text-2xl font-bold text-zinc-700 text-center">
        Size Chart
      </h1>
      <label className="block text-center mt-4 md:8/12 lg:6/12">
        <select
          onChange={(e) => {
            setSizeChartOption(e.target.value);
            console.log(sizeChartOption);
          }}
          className="border h-8 mt-1 text-neutral-600"
        >
          <option>{"MEN'S JERSEY"}</option>
          <option>{"WOMEN'S JERSEY"}</option>
          <option>{"KID'S JERSEY"}</option>
          <option>{"MEN'S TRAINING SUIT"}</option>
        </select>
      </label>
      {sizeChartOption === "MEN'S JERSEY" && <MenJersey />}
      {sizeChartOption === "WOMEN'S JERSEY" && <WomenJersey />}
      {sizeChartOption === "KID'S JERSEY" && <KidJersey />}
      {sizeChartOption === "MEN'S TRAINING SUIT" && <MenTrainingSuit />}
    </div>
  );
};
export default SizeCharts;
