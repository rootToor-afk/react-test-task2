import React from "react";
import * as renderer from "react-test-renderer";

import Counter from "./Counter";
import CounterStore from "../store/store";
const counterStore = new CounterStore();

test("Counter snapshot", () => {
  const counter = renderer.create(<Counter store={counterStore} />).toJSON();
  expect(counter).toMatchSnapshot();
});
