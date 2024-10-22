import { createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import NavBarWrapper from "../components/NavBarWrapper";
import NotFoundPage from "./NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    children: [
      ...paths(),
      { path: "*", element: <NotFoundPage /> }, // This catches all unmatched routes
    ],
  },
]);
