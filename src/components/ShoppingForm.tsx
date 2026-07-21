import React, { useState } from "react";

type ShoppingFormProps = {
  handleAddItem: (name: string) => void;
};

function ShoppingForm({ handleAddItem }: ShoppingFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;

    handleAddItem(text);
    setText("");
  };
  return (
    <div className="buy-form">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        className="buy-input"
        placeholder="買う物を入力"
        value={text}
      />
      <button className="add-button" onClick={handleSubmit}>
        追加
      </button>
    </div>
  );
}

export default ShoppingForm;
