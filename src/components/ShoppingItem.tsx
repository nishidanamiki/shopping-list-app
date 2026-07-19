type ShoppingItemProps = {
  item: { id: number; name: string; isBought: boolean };
  handleToggleBought: (id: number) => void;
  handleDeleteItem: (id: number) => void;
};

function ShoppingItem({
  item,
  handleToggleBought,
  handleDeleteItem,
}: ShoppingItemProps) {
  return (
    <li className="buy-item">
      <label className="buy-label">
        <input
          type="checkbox"
          checked={item.isBought}
          onChange={() => handleToggleBought(item.id)}
        />
        <span className={item.isBought ? "item-name bought-item" : "item-name"}>
          {item.name}
        </span>
      </label>
      <button
        className="delete-button"
        onClick={() => handleDeleteItem(item.id)}
      >
        削除
      </button>
    </li>
  );
}

export default ShoppingItem;
