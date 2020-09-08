import React from "react";
import { render } from "@testing-library/react";
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
  let FamilyLoadingElements;
  act(() => {
    FamilyLoadingElements = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Family />
      </MockedProvider>
    );
  });
  expect(FamilyLoadingElements).toMatchSnapshot();
});

test("Render Family Final State", async () => {
  let FamilyFinalState;
  await act(async () => {
    FamilyFinalState = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Family />
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 0)); // wait for response
  });
  expect(FamilyFinalState).toMatchSnapshot();
});
