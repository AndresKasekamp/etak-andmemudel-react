import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router/router.tsx";
import "./utils/i18n";
import LoadingSpinner from "./components/helpers/LoadingSpinner.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback={<LoadingSpinner wfsData={false} />}>
      <RouterProvider router={router}></RouterProvider>
    </React.Suspense>
  </React.StrictMode>
);
