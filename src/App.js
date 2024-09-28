import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    setButtonDisabled(false);
  }

  function handleDeleteItems(id) {
    if (items.length === 1) setButtonDisabled(true);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(item) {
    const updatedItem = { ...item, packed: !item.packed };
    setItems((items) =>
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        isButtonDisabled={isButtonDisabled}
        setButtonDisabled={setButtonDisabled}
      />
      <Stats items={items} />
    </div>
  );
}
