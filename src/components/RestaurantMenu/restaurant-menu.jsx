import { DishCounter } from "../DishCounter/dish-counter";

export function RestaurantMenu({ menu }) {
  return (
    <ul>
      {menu.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
          <DishCounter />
        </li>
      ))}
    </ul>
  );
}
