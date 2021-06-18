"use strict";
exports.__esModule = true;
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = require("react");
var Counter = mobx_react_lite_1.observer(function (props) {
    var store = props.store;
    return (react_1["default"].createElement("div", { className: "counter__container" },
        react_1["default"].createElement("p", { className: "clicks__container" },
            react_1["default"].createElement("span", { className: "title" },
                react_1["default"].createElement("strong", null, "Clicks:")),
            react_1["default"].createElement("span", null, store.counter)),
        react_1["default"].createElement("div", { className: "btns__container" },
            react_1["default"].createElement("button", { onClick: function () { return store.increment(); } }, "Increment"),
            react_1["default"].createElement("button", { onClick: function () { return store.decrement(); } }, "Decrement"))));
});
exports["default"] = Counter;
