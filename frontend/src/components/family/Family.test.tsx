import React from "react";
import {render} from 'react-dom';
import { MockedProvider } from "@apollo/client/testing";
import { act } from "react-dom/test-utils";
import Family, { GET_FAMILIES_QUERY } from "./Family";
import FamilyExmapleData from "./FamiliesExampleData.json";

const mocks = [
  {
    request: {
      query: GET_FAMILIES_QUERY,
    },
    result: { data: { families: FamilyExmapleData } },
  },
];

test("Render Family Load State", () => {
  let container = document.createElement('div');
  act(() => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Family />
      </MockedProvider>, container
    );
  });
  expect(container).toMatchSnapshot();
});

test("Render Family Final State", async () => {
  let container = document.createElement('div');
  act(() => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Family />
      </MockedProvider>, container
    );
  });
  await new Promise((resolve) => setTimeout(resolve, 0)); // wait for response
  expect(container).toMatchSnapshot();
});
