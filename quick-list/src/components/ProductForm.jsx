/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ProductForm({ onAddItem }) {
  const quantityNum = [...Array(10)].map((_, i) => (
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ));
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    
    const newItem = {
      id: Date.now(),
      name,
      quantity,
      checked: false,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <select
        className="select-quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {quantityNum}
      </select>
      <input
        type="text"
        placeholder="nama barang..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn-add">Tambah</button>
    </form>
  );
}
