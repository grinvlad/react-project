export function RestaurantReviews({ reviews }) {
  if (!reviews) {
    return <p>no reviews</p>;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          {review.text} — {review.rating}/5
        </li>
      ))}
    </ul>
  );
}
