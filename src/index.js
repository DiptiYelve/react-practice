import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => reactElement(JS Object) => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "head" },
  "Hello World With React!"
);

// JSX - HTML-like or XML-Like syntax
// JSX (Gets Transpiled before it reaches the JS engine) by Parcel who gives the responsibility of transpiling JSX to Babel
// JSX => React.createElement => reactElement(JS Object) => HTMLElement(render)
const newHeading = <h1 id="head">Hello World With JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById("hello"));

root.render(newHeading);
