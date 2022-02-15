import React from "react";
import jsPDF from "jspdf";

function ExportPdf(props) {
  const { handleBarDownload } = props;

  const function1 = (e) => {
    e.preventDefault();
    handleBarDownload();
  };

  return (
    <div>
      <div>
        <button className="button" onClick={function1}>
          Export as PNG
        </button>
      </div>
    </div>
  );
}

export default ExportPdf;
