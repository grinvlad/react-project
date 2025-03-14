import { useState } from "react";
import { restaurants } from "../../materials/restaurants-mock";
import { RestaurantTabs } from "../RestaurantTabs/restaurant-tabs";
import { RestaurantInfo } from "../RestaurantInfo/restaurant-info";

export function RestaurantsPage() {
  const [clickedTab, setClickedTab] = useState(restaurants[0].id);

  function handleClickedTab(id) {
    return () => setClickedTab(id);
  }

  return (
    <main>
      <nav>
        <RestaurantTabs
          restaurants={restaurants}
          clickedTab={clickedTab}
          handleClickedTab={handleClickedTab}
        />
      </nav>
      <RestaurantInfo
        key={clickedTab}
        restaurant={restaurants.find(
          (restaurant) => restaurant.id === clickedTab
        )}
      />
    </main>
  );
}
