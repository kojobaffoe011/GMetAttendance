import React from "react";
import ExcelAccept from "./ExcelAccept";
import Header from "./Header";

const Sidebar = (props) => {
  const { getBarPng, barRef, setter, handleBarDownload } = props;

  return (
    <div
      style={{
        flexBasis: "20%",
        display: "flex",
        flexDirection: "column",
        background: "rgba(206, 237, 255, .2)",
        // border: "2px solid blue",
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
          border: "2px solid blue",
        }}
      >
        <ExcelAccept
          getBarPng={getBarPng}
          barRef={barRef}
          setter={setter}
          handleBarDownload={handleBarDownload}
        />
      </div>
    </div>
  );
};

export default Sidebar;
