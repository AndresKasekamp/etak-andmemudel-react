import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title="404" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0, color: "appColor.aboutPageText" }}>
          {t("notFoundPage")}
        </h2>
      </div>
    </>
  );
};

export default NotFoundPage;
