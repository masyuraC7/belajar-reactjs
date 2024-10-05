import { useState } from "react";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import Footer from "./components/Footer";
import QuickList from "./components/QuickList";

const shopItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

function App() {
  const [items, setItems] = useState(shopItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log(id);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <ProductForm onAddItem={handleAddItem} />
      <QuickList
        items={items}
        onRemoveItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Footer itemsLength={items.length} itemsSold={items.filter((item) => item.checked).length} />
    </div>
  );
}

export default App;
