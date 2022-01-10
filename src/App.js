import React, { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import ExcelAccept from "./components/ExcelAccept";
import ExportPdf from "./components/ExportPdf";
import Header from "./components/Header";

function App() {
  const [barChartData, setBarChartData] = useState([]);
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
          <ExcelAccept setter={setter} />
        </div>
      </div>

      <div
        style={{
          flexGrow: 1,
          display: "flex",
          background: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="pdf"
      >
        <BarChart new={barChartData} />
      </div>
    </div>
  );
}

export default App;
