import React, { useState, useEffect } from "react";
function MyComponentEffectHook(props) {
  const [outputValue, setOutputValue] = useState("Placeholder");
  function UpdateText() {
    setOutputValue(document.getElementById("inputTextbox").value);
  }
  useEffect(() => {
    alert("Component Updated");
    return () => {
      alert("Component will be removed");
    };
  });
  return (
    <div>
      <input id="inputTextbox"></input>
      <button type="button" onClick={UpdateText}>
        Update
      </button>
      <br />
      <label>{outputValue}</label>
    </div>
  );
}
export default MyComponentEffectHook;
