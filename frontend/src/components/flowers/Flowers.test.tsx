import React from "react";
import { render } from "react-dom";
import {act} from "react-dom/test-utils";
import { MockedProvider } from "@apollo/client/testing";
import Flowers, {GET_FLOWERS_QUERY} from "./Flowers";
import FlowersExampleData from "./FlowersExampleData.json";
import {GET_FAMILIES_QUERY} from "./AddFlowerDialog";


const mocks = [
    {
        request: {
            query: GET_FLOWERS_QUERY,
        },
        result: {data: {flowers: FlowersExampleData} },
    },
    {
        request: {
            query: GET_FAMILIES_QUERY,
        },
        result: { data: { families: [] } },
    },
];

test("Render Flowers Load State", () => {
    let container = document.createElement('div');
    act(() => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Flowers />
            </MockedProvider>, container
        );
    })
    expect(container).toMatchSnapshot();
});

test("Render Flowers Final State", async () => {
    let container = document.createElement('div');
    act(() => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Flowers />
            </MockedProvider>, container
        );
    })
    await new Promise((resolve) => setTimeout(resolve, 0)); // wait for response
    expect(container).toMatchSnapshot();
});
