import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const languages = [
  { code: "et", lang: "EST" },
  { code: "en", lang: "ENG" },
];

export default function ChangeLanguage() {
  const { i18n } = useTranslation();

  // Get the initial language setup from i18n
  const initialLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];
  const alternateLang =
    languages.find((lang) => lang.code !== i18n.language) || languages[1];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentLanguage, setCurrentLanguage] = useState(initialLang.lang);
  const [menuLanguage, setMenuLanguage] = useState(alternateLang.lang);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = () => {
    // Swap the button text and dropdown text
    const newCurrentLanguage = menuLanguage;
    const newLanguageCode = languages.find(
      (lang) => lang.lang === newCurrentLanguage
    )?.code;

    if (newLanguageCode) {
      i18n.changeLanguage(newLanguageCode); // Change the language in i18n
    }

    setMenuLanguage(currentLanguage);
    setCurrentLanguage(newCurrentLanguage);

    handleClose();
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "appColor.mainCategory" }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {currentLanguage}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleLanguageChange}>{menuLanguage}</MenuItem>
      </Menu>
    </>
  );
}
