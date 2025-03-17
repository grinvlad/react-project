import { RestaurantMenu } from "../RestaurantMenu/restaurant-menu";
import { RestaurantReviews } from "../RestaurantReviews/restaurant-reviews";
import { RatingSeesaw } from "../RatingSeesaw/rating-seesaw";

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
