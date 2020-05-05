import React from "react";
import { render, cleanup } from "@testing-library/react";
import regeneratorRuntime from "regenerator-runtime";

import TableRow from "../components/TableRow";

const florida = {
  data_as_of: "2020-04-30T00:00:00.000",
  group: "By state",
  state: "Florida",
  indicator: "Florida",
  start_week: "2020-02-01T00:00:00.000",
  end_week: "2020-04-25T00:00:00.000",
  covid_deaths: "784",
  total_deaths: "54148",
  percent_expected_deaths: "0.99",
  pneumonia_deaths: "3905",
  pneumonia_and_covid_deaths: "423",
  all_influenza_deaths_j09_j11: "281",
};

afterEach(cleanup);

test("Table Row Data", async () => {
  const { getByTestId } = render(<TableRow data={florida} total={10000} />);

  const tableRow = getByTestId("table-row");
  const state = getByTestId("state");
  const startDate = getByTestId("start-date");
  const endDate = getByTestId("end-date");
  const covidDeaths = getByTestId("covid-deaths");
  const covidPercentage = getByTestId("covid-deaths-percentage");

  expect(tableRow.children.length).toEqual(5);
  expect(state.textContent).toContain("Florida");
  expect(startDate.textContent).toContain("2/1/2020");
  expect(endDate.textContent).toContain("4/25/2020");
  expect(covidDeaths.textContent).toContain("784");
  expect(covidPercentage.textContent).toContain("7.84%");
});
