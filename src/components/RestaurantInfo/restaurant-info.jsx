import { RatingSeesaw } from "../RatingSeesaw/rating-seesaw";

function RestaurantMenu({ menu }) {
  return (
    <ul>
      {menu.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

function RestaurantReviews({ reviews }) {
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

export function RestaurantInfo({ restaurant }) {
  return (
    <section className="restaurant-info">
      <h2>Menu</h2>
      <RestaurantMenu menu={restaurant.menu} />
      <h2>Reviews</h2>
      <RestaurantReviews reviews={restaurant.reviews} />
      <h2>Leave us your rating</h2>
      <RatingSeesaw />
    </section>
  );
}
