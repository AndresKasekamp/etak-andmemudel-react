import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router.tsx";
import "./utils/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <RouterProvider router={router}></RouterProvider>
    </React.Suspense>
  </React.StrictMode>
);
