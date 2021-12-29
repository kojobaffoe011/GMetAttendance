import React from "react";
import jsPDF from "jspdf";

class ExportPdf extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {} 
    }

    generatePdf(){
       
        var doc = new jsPDF("l", "pt", [500,1000] );
        doc.html(document.querySelector("#pdf"), {
        margin: [45,0,0,40],
        callback: function(pdf){
            pdf.save("mypdf.pdf");
        }
    })
    }
 render(){
     return(
         <div>
             
        <button style={{
            marginTop: "auto",
            marginBottom: "5%"
        }} 
                onClick={this.generatePdf}
        >
        export as PDF
        </button>
             
         </div>
     )
 }

}

export default ExportPdf;