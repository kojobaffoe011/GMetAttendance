import React, { useState, useCallback } from "react";
import "./App.css";
// import BarChart from "./components/BarGraph";
// import ExcelAccept from "./components/ExcelAccept";
import { useCurrentPng } from "recharts-to-png";
// import Header from "./components/Header";
import FileSaver from "file-saver";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import Layout from "./components/Layout";

function App() {
  const [barChartData, setBarChartData] = useState([]);

  const [getBarPng, { ref: barRef }] = useCurrentPng();

  const handleBarDownload = useCallback(async () => {
    const png = await getBarPng();
    if (png) {
      FileSaver.saveAs(png, "bar-chart.png");
    }
  }, [getBarPng]);

  const setter = (arg) => {
    setBarChartData(arg);
  };

  return (
    <Layout>
      <Sidebar
        getBarPng={getBarPng}
        setter={setter}
        barRef={barRef}
        handleBarDownload={handleBarDownload}
      />

      <MainPage barRef={barRef} chartData={barChartData} />
    </Layout>
  );
}

export default App;
