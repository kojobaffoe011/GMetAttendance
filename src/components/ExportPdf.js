import React from "react";
import jsPDF from "jspdf";
// import html2pdf from "html2pdf";

function ExportPdf(props) {
  function generatePdf(event) {
    event.preventDefault();
    // var doc = new jsPDF("l", "px", "a3");

    // doc.html(document.getElementById("#pdf"), {
    //   margin: [0, 0, 0, 0],
    //   callback: function (pdf) {
    //     pdf.save("mypdf.pdf");
    //   },
    // });
    let doc = new jsPDF("l", "pt", [500, 1000]);
    doc.html(document.querySelector("#pdf"), {
      margin: [45, 0, 0, 0],
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
  }

  return (
    <div>
      <div>
        <button className="button" onClick={generatePdf}>
          Export as PDF
        </button>
      </div>
    </div>
  );
}

export default ExportPdf;
