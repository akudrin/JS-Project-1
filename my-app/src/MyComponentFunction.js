import React from "react";
function MyComponentFunction() {
  return (
    <div>
      <input id="inputTextbox"></input>
      <button type="submit" onClick={UpdateText}>
        Update
      </button>
      <br />
      <label id="output"></label>
    </div>
  );
}
function UpdateText() {
  document.getElementById("output").innerText = document.getElementById(
    "inputTextbox"
  ).value;
}
export default MyComponentFunction;
