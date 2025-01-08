import { Link, Button, Stack } from "@mui/material";
import { LinkedIn, ContactPage } from "@mui/icons-material";

import { FaGitlab } from "react-icons/fa";

import { useTranslation } from "react-i18next";

export const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
      <Button
        variant="outlined"
        startIcon={<FaGitlab />}
        component={Link}
        href="https://koodivaramu.eesti.ee/maa-ja-ruumiamet/geoinfo/etak-andmemudel-v2"
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
  );
};
