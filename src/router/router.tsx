import { createBrowserRouter, Navigate } from "react-router-dom";
import { paths } from "../pages/paths/paths";
import Layout from "../layouts/Layout";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/et/levituum" replace />,
  },
  {
    path: "/et",
    element: <Navigate to="/et/levituum" replace />,
  },
  {
    path: "/en",
    element: <Navigate to="/en/levituum" replace />,
  },
  {
    path: "/:lng",
    element: <Layout />,
    children: [...paths(), { path: "*", element: <NotFoundPage /> }],
  },
]);
