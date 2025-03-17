export function RestaurantMenu({ menu }) {
  return (
    <ul>
      {menu.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
