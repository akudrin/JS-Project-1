import React from "react";
class MyComponentState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { outputTextB: "Placeholder" };
  }
  UpdateTextB = () => {
    this.setState({
      outputTextB: document.getElementById("inputTextboxB").value,
    });
  };
  render() {
    return (
      <div>
        <input id="inputTextboxB" type="text"></input>
        <button type="buttonB" onClick={this.UpdateTextB}>
          Update
        </button>
        <br />
        <label id="outputB">{this.state.outputTextB}</label>
      </div>
    );
  }
}
export default MyComponentState;
