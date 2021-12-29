import React from "react";
import {useRef, useState } from "react";

const ExcelAccept = () =>{
  const [file, setFile] = useState();
  const fileInputRef = useRef();

    return(
    <div>
        <button onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}
            style={{
              border: "1px solid gray",
            }}
          >
            upload excel document
          </button>
          <input type="file" 
          style={{ display: "none"}} 
          ref={fileInputRef} 
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel/" 
          onChange={(event)=>{
            const file = event.target.files[0];
            if (file){
              setFile(file);
            }
            else{
              setFile(null);
            }
          }}
          />
    </div>
    )
}

export default ExcelAccept;