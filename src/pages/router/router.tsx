import { createBrowserRouter } from "react-router-dom";
import { paths } from "../paths/paths";
import MainWrapper from "./MainWrapper";
import NotFoundPage from "../NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainWrapper />,
    children: [
      ...paths(),
      { path: "*", element: <NotFoundPage /> }, // This catches all unmatched routes
    ],
  },
]);
