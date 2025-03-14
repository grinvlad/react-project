function RestaurantTab({ isActiveTab, restaurantName, onClickedTab }) {
  return (
    <button disabled={isActiveTab} onClick={onClickedTab}>
      {restaurantName}
    </button>
  );
}

export function RestaurantTabs({ restaurants, clickedTab, handleClickedTab }) {
  return (
    <ul className="restaurant-tabs">
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <RestaurantTab
            isActiveTab={id === clickedTab ? true : false}
            restaurantName={name}
            onClickedTab={handleClickedTab(id)}
          />
        </li>
      ))}
    </ul>
  );
}
