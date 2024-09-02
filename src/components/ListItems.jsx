import React, { useState, useEffect } from "react";
import "./styles.modules.css";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue(""); // Очистка поля ввода после добавления
  };

  //   Реализуйте useEffect, который будет выводить в консоль
  // массив items каждый раз, когда он изменяется.
  useEffect(() => {
    console.log("ListItems component updated. ");
  }, [items]);

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter new element"
      />
      <button onClick={addItem}>Add element</button>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default ListItems;
