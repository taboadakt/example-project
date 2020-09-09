import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";

test("Render Top Level App", async () => {
  let AppElement;

  act(() => {
    AppElement = render(
      <MockedProvider mocks={[]}>
        <App />
      </MockedProvider>
    );
  });

  expect(AppElement).toMatchSnapshot();
});
