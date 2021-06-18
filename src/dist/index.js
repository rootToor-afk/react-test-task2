"use strict";
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
var store_1 = require("./store/store");
var app_1 = require("./app");
// import "./css/index.css";
var store1 = new store_1["default"]();
react_dom_1["default"].render(React.createElement(React.StrictMode, null,
    React.createElement(app_1["default"], null)), document.getElementById("main"));
