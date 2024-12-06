import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Analysis from "../components/Analysis";
import CheckOutMMi from "../components/CheckOutMMi";
import Invest from "../components/Invest";
import Learn from "../components/Learn";
import Login from "../components/Login";
import Social from "../components/Social";
export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  
  },
  {
    path: "https://www.google.com/",
    element: <Social />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home/analysis",
    element: <Analysis />,
  },
  {
    path: "/home/invest",
    element: <Invest />,
  },
  {
    path: "/home/learn",
    element: <Learn />,
  },
  {
    path: "/home/checkoutmmi",
    element: <CheckOutMMi />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
