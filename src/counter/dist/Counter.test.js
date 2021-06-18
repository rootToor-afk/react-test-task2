"use strict";
exports.__esModule = true;
var react_1 = require("react");
var renderer = require("react-test-renderer");
var Counter_1 = require("./Counter");
var store_1 = require("../store/store");
var counterStore = new store_1["default"]();
test("Counter snapshot", function () {
    var counter = renderer.create(react_1["default"].createElement(Counter_1["default"], { store: counterStore })).toJSON();
    expect(counter).toMatchSnapshot();
});
