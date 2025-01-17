import { createBrowserRouter, Navigate } from "react-router-dom";
import { paths } from "../paths/paths";
import MainWrapper from "./MainWrapper";
import NotFoundPage from "../NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/et" replace />,
  },
  {
    path: "/:lng",
    element: <MainWrapper />,
    children: [...paths(), { path: "*", element: <NotFoundPage /> }],
  },
]);
