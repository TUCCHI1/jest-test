import { useCounter } from "../hooks/counter";
const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
