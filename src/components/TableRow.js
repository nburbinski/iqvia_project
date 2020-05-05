import React from "react";

const TableRow = ({ data, total }) => {
  const startDate = new Date(data.start_week);
  const endDate = new Date(data.end_week);

  return (
    <tr data-testid="table-row">
      <td data-testid="state">{data.state}</td>
      <td data-testid="start-date">
        {`${
          startDate.getMonth() + 1
        }/${startDate.getDate()}/${startDate.getFullYear()}`}
      </td>
      <td data-testid="end-date">
        {`${
          endDate.getMonth() + 1
        }/${endDate.getDate()}/${endDate.getFullYear()}`}
      </td>
      <td data-testid="covid-deaths">
        {data.covid_deaths ? data.covid_deaths : 0}
      </td>
      <td data-testid="covid-deaths-percentage">
        {data.covid_deaths && data.covid_deaths > 1
          ? ((data.covid_deaths / total) * 100).toFixed(2)
          : 0}
        %
      </td>
    </tr>
  );
};

export default TableRow;
