import React from "react";
import "./Index.css";
import ReactDOM from "react-dom";
import MyComponentFunction from "./MyComponentFunction";
import MyComponentClass from "./MyComponentClass";
import MyComponentState from "./MyComponentState";
import MyComponent2 from "./MyComponent2";
import MyComponentEffectHook from "./MyComponentEffectHook";
import MyDataComponent from "./MyDataComponent";
import MyAxiosComponent from "./MyAxiosComponent";

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
    <br />
    <MyComponent2 />
    <br />
    <MyComponentEffectHook />
    <br />
    <MyDataComponent />
    <br />
    <br />
    <br />
    <MyAxiosComponent />
  </React.Fragment>,
  document.getElementById("root")
);
