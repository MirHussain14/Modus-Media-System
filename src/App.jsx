import React from "react";
import Invoice from "./Invoice";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Invoice />
      </BrowserRouter>
    </>
  );
};

export default App;
