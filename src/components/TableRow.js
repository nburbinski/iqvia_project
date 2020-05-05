import React from "react";

const TableRow = ({ data, total }) => {
  const startDate = new Date(data.start_week);
  const endDate = new Date(data.end_week);

  return (
    <tr>
      <td>{data.state}</td>
      <td>
        {`${
          startDate.getMonth() + 1
        }/${startDate.getDate()}/${startDate.getFullYear()}`}
      </td>
      <td>
        {`${
          endDate.getMonth() + 1
        }/${endDate.getDate()}/${endDate.getFullYear()}`}
      </td>
      <td>{data.covid_deaths ? data.covid_deaths : 0}</td>
      <td>
        {data.covid_deaths && data.covid_deaths > 1
          ? ((data.covid_deaths / total) * 100).toFixed(2)
          : 0}
        %
      </td>
    </tr>
  );
};

export default TableRow;
