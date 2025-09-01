import React, { useState } from "react";

function Child(props) {
  const [inputValue, setInputValue] = useState("");

  // jab input me kuch likhenge
  function handleChange(e) {
    setInputValue(e.target.value); // child ka state update hoga
    props.sendData(e.target.value); // parent ko bhi data turant bhej do
  }

  return (
    <div style={{border: "2px solid blue", padding: "10px", margin: "10px"}}>
      <h3>Child Component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
    </div>
  );
}

export default Child;
