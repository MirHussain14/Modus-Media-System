import {useState} from "react";
import Invoice from "./Invoice";
import { BrowserRouter } from "react-router-dom";
import InvoicePDF from "./InvoicePDF";

const App = () => {
  const [mode, setMode] = useState("light");
  return (
    <>
      <BrowserRouter>
        <div className="max-w-screen overflow-hidden relative">
          <Invoice mode={mode} setMode={setMode}/>
          <InvoicePDF mode={mode} setMode={setMode}/>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
