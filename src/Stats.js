export function Stats({ items }) {
  const numItems = items.length;

  if (numItems === 0) {
    return (
      <footer className="stats">
        <em>Start adding items for your travel!</em>
      </footer>
    );
  }

  const numPacked = items.filter((item) =>
    item.packed === true ? true : false
  ).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list, and you already packed{" "}
        {numPacked}({percentage}%)
      </em>
    </footer>
  );
}
