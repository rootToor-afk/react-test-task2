import React from "react";

import Counter from "../counter/Counter";
import CounterStore from "../store/store";

const counterStore = new CounterStore();

const App = () => (
  <div className="container">
    <Counter store={counterStore} />
  </div>
);

export default App;
