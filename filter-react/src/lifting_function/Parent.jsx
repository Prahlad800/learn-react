import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [childInput, setChildInput] = useState("");

  // Ye function child se data lega
  function handleChildData(data) {
    setChildInput(data); // Parent ka state update ho jayega
  }

  return (
    <div style={{border: "2px solid green", padding: "10px", margin: "10px"}}>
      <h2>Parent Component</h2>
      <p>Data from Child: {childInput}</p>

      {/* Function ko prop ke through child me bhej rahe */}
      <Child sendData={handleChildData} />
    </div>
  );
}

export default Parent;
