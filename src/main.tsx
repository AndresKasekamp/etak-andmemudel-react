import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import "./utils/i18n";
import LoadingSpinner from "./components/helpers/LoadingSpinner.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import LanguageInitializer from "./utils/LanguageInitializer.tsx";
import Clarity from "@microsoft/clarity";

import {
  AppBarColor,
  AppBarColorHover,
  MainCategory,
  EsriCategory,
  EtakMetaCategory,
  RegisterCategory,
  DomainTableHeadingColor,
  DomainTableFieldColor,
  TableHeaderColor,
  Resources,
  FrontPageTableColor,
  AboutPageText,
} from "./data/colors.ts";

const theme = createTheme({
  palette: {
    mode: "light",

    //@ts-ignore
    appColor: {
      landBoardMain: AppBarColor,
      appBarColorHover: AppBarColorHover,
      mainCategory: MainCategory,
      esriCategory: EsriCategory,
      etakMetaCategory: EtakMetaCategory,
      registerCategory: RegisterCategory,
      domainTableHeadingColor: DomainTableHeadingColor,
      domainTableFieldColor: DomainTableFieldColor,
      tableHeaderColor: TableHeaderColor,
      frontPageTableColor: FrontPageTableColor,
      resources: Resources,
      aboutPageText: AboutPageText,
    },
  },
});

Clarity.init(import.meta.env.VITE_CLARITY_PROJECT_ID);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Suspense fallback={<LoadingSpinner wfsData={false} />}>
        <LanguageInitializer />
        <RouterProvider router={router} />
      </React.Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
