import React from "react";

const TableRow = ({ data, total }) => {
  return (
    <tr>
      <td>{data.state}</td>
      <td>{new Date(data.start_week).toDateString()}</td>
      <td>{new Date(data.end_week).toDateString()}</td>
      <td>{data.covid_deaths}</td>
      <td>
        {data.covid_deaths ? (data.covid_deaths / total).toFixed(2) * 100 : 0}%
      </td>
    </tr>
  );
};

export default TableRow;
