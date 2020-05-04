import React, { useEffect, useState } from "react";
import { render } from "react-dom";

// Import components
import Table from "./components/Table";

const App = () => {
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    fetch(`https://data.cdc.gov/resource/hc4f-j6nb.json?`).then((res) =>
      res.json().then((data) => setData(data))
    );
  }, []);
  return (
    <>
      <h1>COVID</h1>
      <Table data={data} />
    </>
  );
};

render(React.createElement(App), document.getElementById("root"));
