import React from "react";
import { render } from "react-dom";

// Import components
import Table from "./components/Table";

const App = () => {
  return (
    <>
      <h1>COVID</h1>
      <Table />
    </>
  );
};

render(React.createElement(App), document.getElementById("root"));
