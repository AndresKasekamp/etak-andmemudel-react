import { createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import { NavbarWrapper } from "../components/Helpers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: paths(),
  },
]);
