import { useState } from "react";
import { restaurants } from "../../materials/restaurants-mock";
import { RestaurantTabs } from "../RestaurantTabs/restaurant-tabs";
import { RestaurantInfo } from "../RestaurantInfo/restaurant-info";

export function RestaurantsPage() {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  return (
    <main>
      <nav>
        <RestaurantTabs
          restaurants={restaurants}
          activeRestaurantId={activeRestaurantId}
          onClickedTab={(id) => () => setActiveRestaurantId(id)}
        />
      </nav>
      <RestaurantInfo
        key={activeRestaurantId}
        restaurant={restaurants.find(
          (restaurant) => restaurant.id === activeRestaurantId
        )}
      />
    </main>
  );
}
