import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { TablesTogetherLink } from "./components/helpers/TablesTogetherLink.tsx";
import { useTranslation } from "react-i18next";
import ResourcesTable from "./components/ResourcesList.tsx";
import { AppProps } from "./interfaces/interfaces.tsx";

function App({ pageTitle, data }: AppProps) {
  const { t } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ textAlign: "center", color: "appColor.landBoardMain" }}
      >
        <Typography variant="h3" gutterBottom>
          {t(pageTitle)}
        </Typography>

        <TablesTogetherLink route="all" />
      </Box>

      <ResourcesTable data={data} />
    </>
  );
}

export default App;
