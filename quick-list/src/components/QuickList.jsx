/* eslint-disable react/prop-types */
import { useState } from "react";
import ItemList from "./ItemList";

export default function QuickList({
  items,
  onRemoveItem,
  onToggleItem,
  onClearList,
}) {
  const [input, setInput] = useState("input");
  const sortedItems = [...items];

  switch (input) {
    case "name":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
    case "checked":
        sortedItems.sort((a, b) => a.checked - b.checked);
        break;
    default:
        sortedItems.sort((a, b) => a.id - b.id);
        break;
  }

  return (
    <div>
      <div className="list">
        <ul className="ul-list">
          {sortedItems.map((item) => (
            <ItemList
              key={item.id}
              item={item}
              onRemoveItem={onRemoveItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={input} onChange={(e) => setInput(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearList}>Bersihkan Daftar</button>
      </div>
    </div>
  );
}
