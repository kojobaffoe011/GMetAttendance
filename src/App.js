import React, { useState, useCallback } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import ExcelAccept from "./components/ExcelAccept";
import { useCurrentPng } from "recharts-to-png";
import Header from "./components/Header";
import FileSaver from "file-saver";

function App() {
  const [barChartData, setBarChartData] = useState([]);

  const [getBarPng, { ref: barRef }] = useCurrentPng();

  const handleBarDownload = useCallback(async () => {
    const png = await getBarPng();
    if (png) {
      FileSaver.saveAs(png, "bar-chart.png");
    }
  }, [getBarPng]);

  const setter = arg => {
    setBarChartData(arg);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
      }}
    >
      <div
        style={{
          flexBasis: "20%",
          display: "flex",
          flexDirection: "column",
          background: "rgba(206, 237, 255, .2)",
        }}
      >
        <div
          style={{
            height: "10%",
            display: "flex",
          }}
        >
          <Header />
        </div>

        <div
          style={{
            marginTop: "auto",
            background: "rgba(206, 237, 255, .5)",
            padding: "2em",
          }}
        >
          <ExcelAccept getBarPng={getBarPng} barRef={barRef} setter={setter} handleBarDownload={handleBarDownload}/>
        </div>
      </div>

      <div
        style={{
          flexGrow: 1,
          display: "flex",
          background: "white",
          justifyContent: "center",
          alignItems: "center",
          // border:"2px solid red"
        }}
        id='export'
      >
        <BarChart barRef={barRef} barChartData={barChartData} />
      </div>
    </div>
  );
}

export default App;
