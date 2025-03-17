export function RestaurantTabs({
  restaurants,
  activeRestaurantId,
  onClickedTab,
}) {
  return (
    <ul className="restaurant-tabs">
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <button
            disabled={id === activeRestaurantId ? true : false}
            onClick={onClickedTab(id)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
