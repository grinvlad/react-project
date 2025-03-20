import { useState } from "react";

export function useDishCounter(min = 0, max = 5) {
  const [counter, setCounter] = useState(min);

  const increment = () => setCounter(Math.min(counter + 1, max));
  const decrement = () => setCounter(Math.max(counter - 1, min));

  return {
    counter,
    increment,
    decrement,
  };
}
