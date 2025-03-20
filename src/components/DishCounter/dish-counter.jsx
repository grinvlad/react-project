import { useDishCounter } from "./use-dish-counter";
import { Counter } from "../Counter/counter";

export function DishCounter({ min = 0, max = 5 }) {
  const { counter, increment, decrement } = useDishCounter(min, max);

  return (
    <Counter value={counter} onIncrement={increment} onDecrement={decrement} />
  );
}
