import Counter from "../counter/counter";
import CounterStore from "../store/store";

const counterStore = new CounterStore();

const App = () => (
  <div className="container">
    <Counter store={counterStore} />
  </div>
);

export default App;
