import { createRoot } from "react-dom/client";
import { restaurants } from "./materials/restaurants-mock";

function getMenu(menu) {
  return (
    <ul>
      {menu.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
}

function getReviews(reviews) {
  return (
    <ul>
      {reviews.map((review) => (
        <li>
          {review.text} — {review.rating}/5
        </li>
      ))}
    </ul>
  );
}

createRoot(document.getElementById("root")).render(
  <article className="restaurants">
    {restaurants.map((restaurant) => (
      <section>
        <h2>{restaurant.name}</h2>
        <h3>Menu:</h3>
        {getMenu(restaurant.menu)}
        <h3>Reviews:</h3>
        {getReviews(restaurant.reviews)}
      </section>
    ))}
  </article>
);
