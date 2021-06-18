"use strict";
exports.__esModule = true;
var store_1 = require("./store");
var store = new store_1["default"]();
// describe('Counter store', () => {
it('check increment and decrement acctions', function () {
    expect(store.counter).toBe(0);
    store.increment();
    expect(store.counter).toBe(1);
    store.decrement();
    store.decrement();
    expect(store.counter).toBe(-1);
});
// })
