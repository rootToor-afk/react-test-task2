import {
  makeObservable,
  observable,
  action
} from 'mobx'


class CounterStore {
  __counter = 0;

  constructor() {
    makeObservable(this, {
      __counter: observable,
      increment: action,
      decrement: action,
    });
  }

  get counter() {
    return this.__counter
  }

  increment() {
    this.__counter++
  }
  decrement() {
    this.__counter--
  }
}

export default CounterStore