export const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="counter">
      <button type="button" onClick={onDecrement}>
        -
      </button>
      {value}
      <button type="button" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
