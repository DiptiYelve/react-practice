import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => reactElement(JS Object) => HTMLElement(render)
// const heading = React.createElement(
//   "h1",
//   { id: "head" },
//   "Hello World With React!"
// );

// JSX - HTML-like or XML-Like syntax
// JSX (Gets Transpiled before it reaches the JS engine) by Parcel who gives the responsibility of transpiling JSX to Babel
// JSX => React.createElement => reactElement(JS Object) => HTMLElement(render)
const newHeading = <h1 id="head"> Hello World variable With JSX!</h1>;

const heading = <h1 id="headin"> Hello World new variable With JSX!</h1>;

// Functional Component
const Heading = () => (
  <>
    <h1 id="heading"> {heading} Hello World component With JSX!</h1>
  </>
);

// Component Composition
const Comp = () => (
  <>
    <Heading />
    <h1>This is a functional component</h1>
  </>
);

// Component Composition
const Comp1 = () => (
  <>
    {newHeading}
    <Comp />
    {/* {Comp()} */}
  </>
);
//
const root = ReactDOM.createRoot(document.getElementById("hello"));

root.render(<Comp1 />);
