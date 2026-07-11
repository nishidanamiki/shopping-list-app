import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [items, setItem] = useState([
    { id: 1, name: "納豆", isBought: true },
    { id: 2, name: "牛乳", isBought: false },
  ]);
  const handleToggleBought = (id: number) => {
    const updateItems = items.map((item) => {
      if (id === item.id) {
        return { ...item, isBought: !item.isBought };
      }
      return item;
    });
    setItem(updateItems);
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
        <button
          className="add-button"
          onClick={() => {
            if (!text.trim()) return;
            setItem([
              ...items,
              { id: Date.now(), name: text, isBought: false },
            ]);
            setText("");
          }}
        >
          追加
        </button>
      </div>

      <ul className="buy-list">
        {items.map((item) => (
          <li className="buy-item" key={item.id}>
            <label className="buy-label">
              <input
                type="checkbox"
                checked={item.isBought}
                onChange={() => handleToggleBought(item.id)}
              />
              <span
                className={
                  item.isBought ? "item-name bought-item" : "item-name"
                }
              >
                {item.name}
              </span>
            </label>
            <button
              className="delete-button"
              onClick={() => {
                setItem(items.filter((checkItem) => checkItem.id !== item.id));
              }}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
