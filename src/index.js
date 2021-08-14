//var React = require("react");
import React from "react";
//var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";
//ReactDOM.render(WHAT TO SHOW , WHERE TO SHOW IT);
ReactDOM.render(
  <>
    <h1>Hello World</h1>
    <p>This is div</p>
  </>,
  document.getElementById("root")
);

var h1 = document.createElement("h1");
h1.innerHTML = "HELLO";
document.getElementById("root").appendChild(h1);
