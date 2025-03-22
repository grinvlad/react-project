import { useState, useCallback } from "react";

export function useDishCounter(min = 0, max = 5) {
  const [counter, setCounter] = useState(min);

  const increment = useCallback(
    () => setCounter((counter) => Math.min(counter + 1, max)),
    [max]
  );
  const decrement = useCallback(
    () => setCounter((counter) => Math.max(counter - 1, min)),
    [min]
  );

  return {
    counter,
    increment,
    decrement,
  };
}
