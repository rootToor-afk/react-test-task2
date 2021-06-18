import * as React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import App from "./app";
// import "./css/index.css";


const store1 = new store()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("main")
);
