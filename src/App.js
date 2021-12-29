
import "./App.css";
import BarChart from "./components/BarChart";
import ExcelAccept from "./components/ExcelAccept";
import ExportPdf from "./components/ExportPdf";
import Header from "./components/Header";

function App() {


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
          border: "1px solid gray",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "10%",
            border: "1px solid gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header/>
        </div>

        <div
          style={{
            marginTop: "auto",
            border: "1px solid gray",
            height: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ExcelAccept/>
        </div>
      </div>

      <div
        style={{
          flexGrow: 1,
          display: "flex",
          border: "1px solid gray",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="pdf"
      >
        <BarChart/>
        
      </div>
      <div style = {{
          justifyContent: "center",
          border: "1px solid gray",
          alignItems: "center",
          marginTop: "auto",
          marginBottom:"5%",
          marginRight: "1%"
          
        }}>
        <ExportPdf/>
        </div>
    </div>
  );
}

export default App;

  
