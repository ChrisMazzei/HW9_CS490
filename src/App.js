// https://www.robinwieruch.de/react-add-item-to-list
import React, { useState } from "react";
import "./styles.css";

const initialList = [];

export default function App() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");

  function handleAdd() {
    const newList = list.concat({ name });
    setList(newList);
    setName("");
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  /**
   * kept getting leaks, tried few different ways but
   * could not getting it not crash after hitting enter 3 times
   */
  var doc = document.getElementById("input");
  if (doc) {
    doc.addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.key === "Enter") {
        //document.getElementById("myButton").click();
        //handleAdd();
      }
    });
  }

  return (
    <div className="App">
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input type="text" id="input" value={name} onChange={handleChange} />
      <button type="button" id="myButton" onClick={handleAdd}>
        Submit
      </button>
    </div>
  );
}
