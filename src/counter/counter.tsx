import { observer } from "mobx-react-lite";
import { ICounterProps } from "./types";

const Counter = observer((props: ICounterProps) => {
  const { store } = props;
  return (
    <div className="counter__container">
      <p className="clicks__container">
        <span className="title">
          <strong>Clicks:</strong>
        </span>
        <span>{store.counter}</span>
      </p>
      <div className="btns__container">
        <button onClick={() => store.increment()}>Increment</button>
        <button onClick={() => store.decrement()}>Decrement</button>
      </div>
    </div>
  );
});

export default Counter;
