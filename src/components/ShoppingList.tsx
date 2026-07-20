import ShoppingItem from "./ShoppingItem";

type ShoppingListProps = {
  items: { id: number; name: string; isBought: boolean }[];
  handleDeleteItem: (id: number) => void;
  handleToggleBought: (id: number) => void;
};

function ShoppingList({
  items,
  handleDeleteItem,
  handleToggleBought,
}: ShoppingListProps) {
  return (
    <ul className="buy-list">
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          handleDeleteItem={handleDeleteItem}
          handleToggleBought={handleToggleBought}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
