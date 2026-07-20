import { useState } from "react";
import ShoppingList from "./components/ShoppingList";

interface ShoppingItemType {
  id: number;
  name: string;
  isBought: boolean;
}

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<ShoppingItemType[]>([
    { id: 1, name: "納豆", isBought: true },
    { id: 2, name: "牛乳", isBought: false },
  ]);
  const handleAddItem = () => {
    if (!text.trim()) return;
    setItems([...items, { id: Date.now(), name: text, isBought: false }]);
    setText("");
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
      <div className="buy-form">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          className="buy-input"
          placeholder="買う物を入力"
          value={text}
        />
        <button className="add-button" onClick={handleAddItem}>
          追加
        </button>
      </div>
      <ShoppingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleBought={handleToggleBought}
      />
    </div>
  );
}
export default App;
