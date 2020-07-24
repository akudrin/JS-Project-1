import React from "react";
class MyComponentClass extends React.Component {
  UpdateTextA() {
    document.getElementById("outputA").innerText = document.getElementById(
      "inputTextboxA"
    ).value;
  }
  render() {
    return (
      <div>
        <input id="inputTextboxA"></input>
        <button type="buttonA" onClick={this.UpdateTextA}>
          Update
        </button>
        <br />
        <label id="outputA"></label>
        <br />
        <label>{this.props.text}</label>
      </div>
    );
  }
}
export default MyComponentClass;
