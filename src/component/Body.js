import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
