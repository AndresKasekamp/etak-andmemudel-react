import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PageTitle = ({
  title,
  translate = false,
}: {
  title: string;
  translate?: boolean;
}) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  if (translate) {
    title = t(title);
  }

  useEffect(() => {
    document.title = `${title} - ${t("pageTitle")}`;
  }, [location, title, i18n.language]);

  return null;
};

export default PageTitle;
