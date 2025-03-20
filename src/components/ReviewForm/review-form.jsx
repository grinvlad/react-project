import { useForm } from "./use-form";
import { Counter } from "../Counter/counter";

export function ReviewForm() {
  const {
    form,
    updateName,
    updateReview,
    incrementRating,
    decrementRating,
    clearForm,
  } = useForm();

  return (
    <form className="review-form">
      <div>
        <label htmlFor="name">Your name: </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(e) => updateName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="review">Review: </label>
        <textarea
          id="review"
          name="review"
          value={form.review}
          onChange={(e) => updateReview(e.target.value)}
        />
      </div>
      <Counter
        value={form.rating}
        onIncrement={incrementRating}
        onDecrement={decrementRating}
      />
      <button type="button" onClick={clearForm}>
        clear
      </button>
    </form>
  );
}
