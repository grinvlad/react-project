import { useState } from "react";

export function RatingSeesaw({ min = 0, max = 5 } = {}) {
  const [rating, setRating] = useState(min);

  function handleRatingSetting(diff) {
    let newRating = rating + diff;
    if (min > newRating || newRating > max) {
      newRating = rating;
    }
    return () => setRating(newRating);
  }

  return (
    <div className="rating-seesaw">
      <button onClick={handleRatingSetting(-1)}>-</button>
      {rating}
      <button onClick={handleRatingSetting(1)}>+</button>
    </div>
  );
}
