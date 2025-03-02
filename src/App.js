import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./componets/Header";
import Body from "./componets/Body";
import Footer from "./componets/Footer";

import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

  const App = () => (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );

root.render(<App />);
