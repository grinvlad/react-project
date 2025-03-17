export function RestaurantTabs({ restaurants, clickedTab, handleClickedTab }) {
  return (
    <ul className="restaurant-tabs">
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <button
            disabled={id === clickedTab ? true : false}
            onClick={handleClickedTab(id)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
