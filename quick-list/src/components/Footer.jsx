/* eslint-disable react/prop-types */
export default function Footer({ itemsLength, itemsSold }) {
  function percentageItemsSold() {
    return Math.round((itemsSold / itemsLength) * 100);
  }

  return (
    <footer className="stats">
      {itemsLength == 0 ? (
        <div>Belum ada barang di daftar belanjaan</div>
      ) : (
        <div>
          Ada {itemsLength} barang di daftar belanjaan, {itemsSold} barang sudah
          dibeli ({percentageItemsSold()}%)
        </div>
      )}
    </footer>
  );
}
