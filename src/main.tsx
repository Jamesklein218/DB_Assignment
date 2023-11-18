import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Club from "./pages/Club";
import Match from "./pages/Match";
import Competitor from "./pages/Competitor";
import Error from "./pages/Error";

import "./index.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Awards from "./pages/Awards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/awards",
    element: <Awards />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: "/club/:clubId",
    element: <Club />,
    errorElement: <Error />,
  },
  {
    path: "/match/:matchId",
    element: <Match />,
    errorElement: <Error />,
  },
  {
    path: "/competitor/:competitorId",
    element: <Competitor />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
