import {
  Box,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { useTranslation } from "react-i18next";

export const UsefulLinks = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: 3, textAlign: "left", ml: 2 }}>
      <Typography variant="h5" gutterBottom>
        {t("usefulLinks")}
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <Link
                href="https://geoportaal.maaamet.ee/index.php?lang_id=1&page_id=79"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("moreInfoETAKHyper")}
              </Link>
            }
            secondary={t("moreInfoETAKsub")}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Link
                href="https://geoportaal.maaamet.ee/est/ruumiandmed/eesti-topograafia-andmekogu/laadi-etak-andmed-alla-p609.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("moreInfoETAKDataHyper")}
              </Link>
            }
            secondary={t("moreInfoETAKDatasub")}
          />
        </ListItem>
      </List>
    </Box>
  );
};
