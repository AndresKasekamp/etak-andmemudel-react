import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PageTitle = ({ title }: { title: string }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = `${title} - ${t("pageTitle")}`;
    // document.title = title;
  }, [location, title, i18n.language]);

  return null;
};

export default PageTitle;
