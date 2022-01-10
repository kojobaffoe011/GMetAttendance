import React, { Component } from "react";
import { useRef, useState } from "react";
import readXlsxFile from "read-excel-file";
import ExportPdf from "./ExportPdf";

function ExcelAccept(props) {
  const [file, setFile] = useState(null);

  const fileUploadRef = useRef();

  async function handleFileUpload(e) {
    let file = e.target.files[0];
    setFile(file);
    const readFile = await readXlsxFile(file);
    // console.log(readFile);

    const data = [];

    for (const element of readFile) {
      let temp = {
        name: element[1],
        attendance: element[2],
      };
      data.push(temp);
    }
    data.shift();
    props.setter(data);
  }

  function handleClick(event) {
    event.preventDefault();
    fileUploadRef.current.click();
  }

  return (
    <div>
      <form>
        <div>
          <div>
            <input
              ref={fileUploadRef}
              style={{ background: "red", display: "none" }}
              type="file"
              name="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel/, .xls"
              onChange={handleFileUpload}
              id="input"
            />
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <button
            className="button auto-vertical"
            style={{ marginBottom: "1em" }}
            onClick={handleClick}
          >
            Click to Upload
          </button>
          <ExportPdf />
        </div>
      </form>
    </div>
  );
}

export default ExcelAccept;
