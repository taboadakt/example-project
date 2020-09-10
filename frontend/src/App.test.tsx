import React from "react";
import {render} from 'react-dom';
import { act } from "react-dom/test-utils";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";

test("Render Top Level App", async () => {
  let container = document.createElement('div');
  act(() => {
    render(
      <MockedProvider mocks={[]}>
        <App />
      </MockedProvider>, container
    );
  });
  expect(container).toMatchSnapshot();
});
