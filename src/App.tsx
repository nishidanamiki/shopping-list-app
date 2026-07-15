import { useState } from "react";
import ShoppingItem from "./components/ShoppingItem";

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
    </div>
  );
}
export default App;
