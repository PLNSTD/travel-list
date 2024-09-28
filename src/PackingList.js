import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  isButtonDisabled,
  setButtonDisabled,
}) {
  let [sortingMethod, setSortingMethod] = useState("input");
  let sortedItems;

  if (sortingMethod === "input") sortedItems = items;
  else if (sortingMethod === "alphabet")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortingMethod === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  function handleListDelete() {
    if (window.confirm("Are you sure you want to delete all items?")) {
      items.slice().forEach((item) => {
        onDeleteItem(item.id);
      });
      setButtonDisabled(true);
    }
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemInfo={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select onChange={(e) => setSortingMethod(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="alphabet">Sort By Alphabet</option>
          <option value="packed">Sort By Packed</option>
        </select>
        <button
          onClick={() => handleListDelete()}
          disabled={isButtonDisabled ? true : false}
          style={isButtonDisabled ? { opacity: 0.5 } : {}}
        >
          CLEAR LIST
        </button>
      </div>
    </div>
  );
}
