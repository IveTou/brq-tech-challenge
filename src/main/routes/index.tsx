import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MarketFactory } from "../factories/pages/table";
import { UserFactory } from "../factories/pages/user";

export const router = createBrowserRouter([
  {
    path: "/table",
    element: <MarketFactory />,
  },
  {
    path: "/user",
    element: <UserFactory />,
  },
])