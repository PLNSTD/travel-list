export function Item({ itemInfo, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItem(itemInfo)} />
      <span style={itemInfo.packed ? { textDecoration: "line-through" } : {}}>
        {itemInfo.quantity} {itemInfo.description}
      </span>
      <button
        style={{ color: "red" }}
        onClick={() => onDeleteItem(itemInfo.id)}
      >
        &times;
      </button>
    </li>
  );
}
