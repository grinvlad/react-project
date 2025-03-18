import { useState } from "react";
import { Counter } from "../Counter/counter";

export function DishCounter({ min = 0, max = 5 }) {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(Math.min(counter + 1, max));
  const decrement = () => setCounter(Math.max(counter - 1, min));

  return (
    <Counter value={counter} onIncrement={increment} onDecrement={decrement} />
  );
}
