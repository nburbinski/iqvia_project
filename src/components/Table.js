import React from "react";

import TableRow from "./TableRow";

const Table = ({ data, totalDeaths, search }) => {
  if (!data.length) {
    return <div>Loading...</div>;
  }

  // For current data set, filter out other data and sort in descending order
  // Values from API < 10 return nothing, so default to 0
  var sortedData = data
    .filter((state) => state.state !== "United States")
    .sort(
      (a, b) =>
        (b.covid_deaths ? b.covid_deaths : 0) -
        (a.covid_deaths ? a.covid_deaths : 0)
    );

  // Filter by search parameters
  if (search) {
    sortedData = sortedData.filter(
      (state) => state.state.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>State Name</th>
          <th>Start Week</th>
          <th>End Week</th>
          <th>Covid-19 Deaths</th>
          <th>% US Covid-19 Deaths</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.length >= 1 ? (
          sortedData.map((row) => (
            <TableRow key={row.state} data={row} total={totalDeaths} />
          ))
        ) : (
          <tr>
            <td>No entries found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
