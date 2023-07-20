import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItem] = useState([]);

  function addListItem() {
    setListItem((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }

  function hndleDeleteBtn(index) {
    console.log(index);
    let newlistItem = [...listItems];
    newlistItem.splice(index, 1);
    // const newListItem = listItems.splice(index, 1);
    // console.log(newListItem)
    setListItem(newlistItem);
  }

  return (
    <div>
      {/* Do not remove the main div */}

      <h3>To-Do List</h3>
      <div className="inputBtnDiv">
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button onClick={addListItem}>Add</button>
      </div>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => hndleDeleteBtn(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
