import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componets/Header";

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

// Assignments:
// Q1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// const div = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", null, "Heading 1"),
//   React.createElement("h2", null, "Heading 2"),
//   React.createElement("h3", null, "Heading 3"),
// ]);

// Create the same element using JSX
const div = (
  <div className="title">
    {/* <> */}
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    {/* </> */}
  </div>
);

const CreateDiv2 = () => (
      <div className="title">{div}</div>
  );

const CreateDiv = () => (
  //   <div className="title">{div}</div>
  <>
  <CreateDiv2 />
  <div className="title">
    <h1>Heading 4</h1>
    <h2>Heading 5</h2>
    <h3>Heading 6</h3>
  </div>
  {CreateDiv2()}
  <CreateDiv2> </CreateDiv2>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("hello"));

// root.render(<CreateDiv />);
root.render(<Header />);
