import React from "react";

import TableRow from "./TableRow";

const Table = ({ data }) => {
  if (!data.length) {
    return <div>Loading...</div>;
  }
  return (
    <table>
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
        {data.map((row) => (
          <TableRow data={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
