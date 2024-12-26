import {
  Box,
  Typography,
  Link,
  Button,
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { LinkedIn, ContactPage } from "@mui/icons-material";
import { AboutPageText } from "../data/colors";
import packageInfo from "../../package.json" assert { type: "json" };
import Legend from "../components/helpers/CategoryLegend";
import { FaGitlab } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  // Project metadata

  return (
    <Box
      sx={{
        textAlign: "center",
        color: AboutPageText,
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        {t("aboutPageTitle")}
      </Typography>
      <Typography variant="body1" component="p">
        {t("aboutPageText")}
      </Typography>

      {/* Project Details */}
      <Typography variant="body2" component="p" color="text.secondary" mt={2}>
        <strong>{t("version")}:</strong> {packageInfo.version}
      </Typography>
      <Typography variant="body2" component="p" color="text.secondary" mt={1}>
        <strong>{t("lastUpdated")}:</strong> {__BUILD_DATE__}
      </Typography>

      <Legend></Legend>

      {/* Useful Links Section */}
      <Box sx={{ mt: 3, textAlign: "left" }}>
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

      <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
        <Button
          variant="outlined"
          startIcon={<FaGitlab />}
          component={Link}
          href="https://koodivaramu.eesti.ee/maa-ja-ruumiamet/geoinfo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitLab
        </Button>

        <Button
          variant="outlined"
          startIcon={<LinkedIn />}
          component={Link}
          href="https://www.linkedin.com/in/andres-kasekamp-a226b2198/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          startIcon={<ContactPage />}
          component={Link}
          href="https://geoportaal.maaamet.ee/index.php?lang_id=1&plugin_act=staff_view&p_id=610&iframe=1&page_id=596"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("contact")}
        </Button>
      </Stack>
    </Box>
  );
};

export default AboutPage;
