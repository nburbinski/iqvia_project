import React, { useEffect, useState } from "react";
import { render } from "react-dom";

// Import components
import Table from "./components/Table";
import Search from "./components/Search";

const App = () => {
  const [data, setData] = useState({});
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Get all states data
    fetch(`https://data.cdc.gov/resource/hc4f-j6nb.json`).then((res) =>
      res.json().then((data) => setData(data))
    );

    // Get total deaths
    fetch(
      `https://data.cdc.gov/resource/hc4f-j6nb.json?indicator=Total%20Deaths`
    ).then((res) =>
      res.json().then((data) => setTotalDeaths(data[0].covid_deaths))
    );
  }, []);

  return (
    <div className="container">
      <h1>COVID-19</h1>
      <h2>U.S. Deaths due to COVID-19 based by state</h2>
      <Search search={search} setSearch={setSearch} />
      <Table data={data} totalDeaths={totalDeaths} search={search} />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
