import { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import ShoppingForm from "./components/ShoppingForm";

interface ShoppingItemType {
  id: number;
  name: string;
  isBought: boolean;
}

function App() {
  const [items, setItems] = useState<ShoppingItemType[]>([
    { id: 1, name: "納豆", isBought: true },
    { id: 2, name: "牛乳", isBought: false },
  ]);
  const handleAddItem = (name: string) => {
    setItems([...items, { id: Date.now(), name: name, isBought: false }]);
  };
  const handleDeleteItem = (id: number) => {
    setItems(items.filter((checkItem) => checkItem.id !== id));
  };
  const handleToggleBought = (id: number) => {
    const updateItems = items.map((item) => {
      if (id === item.id) {
        return { ...item, isBought: !item.isBought };
      }
      return item;
    });
    setItems(updateItems);
  };
  return (
    <div className="app-container">
      <h1 className="page-title">買い物リスト</h1>

      <ShoppingForm handleAddItem={handleAddItem} />

      <ShoppingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleBought={handleToggleBought}
      />
    </div>
  );
}
export default App;
