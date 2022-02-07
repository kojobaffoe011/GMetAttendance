import React, { useRef, useState } from "react";
import BarChart from "./BarGraph";
import PieGraph from "./PieGraph";

const MainPage = (props) => {
  const { pie_chart_ref, barRef, chartData } = props;
  const [toggleGraph, setToggleGraph] = useState(true);

  const changeToggleGraph = () => {
    if (toggleGraph) {
      setToggleGraph(false);
    } else {
      setToggleGraph(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        background: "white",
        flexDirection: "column",
      }}
      id="export"
    >
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          background: "white",
        }}
      >
        <div style={{ display: "flex", flexGrow: 1 }}>
          {toggleGraph && <BarChart barRef={barRef} chartData={chartData} />}
        </div>
        <div style={{ display: "flex", flexGrow: 1 }}>
          {toggleGraph || (
            <PieGraph pie_chart_ref={pie_chart_ref} chartData={chartData} />
          )}
        </div>
      </div>
      <div style={{ display: "flex", flexBasis: "15%" }}>
        <button
          className="toggle"
          onClick={changeToggleGraph}
          style={{ flexGrow: 1 }}
        >
          Toggle Graph
        </button>
      </div>
    </div>
  );
};

export default MainPage;
