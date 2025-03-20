import { RestaurantMenu } from "../RestaurantMenu/restaurant-menu";
import { RestaurantReviews } from "../RestaurantReviews/restaurant-reviews";
import { ReviewForm } from "../ReviewForm/review-form";

export function RestaurantInfo({ restaurant }) {
  return (
    <section className="restaurant-info">
      <h2>Menu</h2>
      <RestaurantMenu menu={restaurant.menu} />
      <h2>Reviews</h2>
      <RestaurantReviews reviews={restaurant.reviews} />
      <h2>Leave us your review</h2>
      <ReviewForm />
    </section>
  );
}
