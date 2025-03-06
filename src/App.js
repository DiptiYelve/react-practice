import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./componets/Header";
import Body from "./componets/Body";
import Footer from "./componets/Footer";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Error from "./componets/Error";
import MenuItemComponent from "./componets/MenuItemComponent";

import "./App.css";

  const App = () => (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurante/:resID",
          element: <MenuItemComponent />,
        }
      ],
      errorElement: <Error />
    }
  ]);

  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
