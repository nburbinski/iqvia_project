import React from "react";
import { render, cleanup } from "@testing-library/react";
import regeneratorRuntime from "regenerator-runtime";
import { readFileSync } from "fs";
import path from "path";

import Table from "../components/Table";

const states = JSON.parse(
  readFileSync(
    path.join(__dirname, "../../__mocks__/fetch/res.json")
  ).toString()
);

afterEach(cleanup);

test("Table Data", async () => {
  const { getByTestId } = render(<Table data={states} totalDeaths={10000} />);

  const tableList = getByTestId("table-list");

  // Expect to only return 50 states + PR, DC, and NYC
  expect(tableList.children.length).toEqual(53);
});
