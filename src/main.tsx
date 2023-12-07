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
import Awards from "./pages/Awards";
import Protected from "./layout/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Main />
      </Protected>
    ),
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/awards",
    element: (
      <Protected>
        <Awards />
      </Protected>
    ),
    errorElement: <Error />,
  },
  {
    path: "/club/:clubId",
    element: (
      <Protected>
        <Club />
      </Protected>
    ),
    errorElement: <Error />,
  },
  {
    path: "/match/:matchId",
    element: (
      <Protected>
        <Match />
      </Protected>
    ),
    errorElement: <Error />,
  },
  {
    path: "/competitor/:competitorId",
    element: (
      <Protected>
        <Competitor />
      </Protected>
    ),
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
