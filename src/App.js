import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./componets/Header";
import Body from "./componets/Body";
import Footer from "./componets/Footer";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Error from "./componets/Error";
import MenuItemComponent from "./componets/MenuItemComponent";

const Grocery = lazy(() => import("./componets/Grocery"));

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
          path: "/grocery",
          element: <Suspense fallback={<div>Loading...</div>}>
          <Grocery/>
          </Suspense>
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
