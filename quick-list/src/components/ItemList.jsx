/* eslint-disable react/prop-types */
export default function ItemList({ item, onRemoveItem, onToggleItem }) {
  return (
    <li className="list-item" key={item.id}>
      <input
        type="checkbox"
        defaultChecked={item.checked}
        onClick={() => onToggleItem(item.id)}
      />
      <span className={item.checked ? "list-x" : ""}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onRemoveItem(item.id)}>&times;</button>
    </li>
  );
}
