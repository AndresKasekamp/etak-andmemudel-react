import { createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import NavBarWrapper from "../components/NavBarWrapper";

// TODO error page luua

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    children: paths(),
  },
]);
