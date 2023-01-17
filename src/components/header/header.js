import { useCountStore } from "../../countStore/countStore";

export const Header = () => {
  const { count, increment, decrement } = useCountStore();
  return (
    <header>
      <div>{count}</div>
      <button onClick={increment}>Header Increment</button>
      <button onClick={decrement}>Header Decrement</button>
    </header>
  );
};
