import React from "react";
import ReactDOM from "react-dom";
import MyComponentFunction from "./MyComponentFunction";
import MyComponentClass from "./MyComponentClass";
import MyComponentState from "./MyComponentState";

const ParaText = "Hello from React Again";
ReactDOM.render(
  <React.Fragment>
    <MyComponentFunction />
    <br />
    <br />
    <MyComponentClass text="Hello from React Class Component" />
    <br />
    <br />
    <p id="para1">{ParaText}</p>
    <br />
    <MyComponentState />
  </React.Fragment>,
  document.getElementById("root")
);
