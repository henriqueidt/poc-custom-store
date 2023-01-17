import logo from "./logo.svg";
import "./App.css";
import { useCountStore } from "./countStore/countStore";
import { Header } from "./components/header/header";

function App() {
  const { count, increment, decrement } = useCountStore();
  return (
    <div className="App">
      <Header />
      <div>
        <div>Count: {count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
