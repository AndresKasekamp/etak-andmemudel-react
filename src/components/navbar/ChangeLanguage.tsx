import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate, useLocation, Location } from "react-router-dom";
import { useEffect } from "react";

const languages = [
  { code: "et", lang: "EST" },
  { code: "en", lang: "ENG" },
];

export default function ChangeLanguage() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location: Location = useLocation();

  console.log("i18n lang", i18n.language);

  // Get the initial language setup from i18n
  const initialLang = languages.find((lang) => lang.code === i18n.language) || {
    code: "en",
    lang: "ENG",
  };
  const alternateLang = languages.find(
    (lang) => lang.code !== i18n.language
  ) || { code: "et", lang: "EST" };

  console.log("Initial lang", initialLang);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentLanguage, setCurrentLanguage] = useState(initialLang.lang);
  const [menuLanguage, setMenuLanguage] = useState(alternateLang.lang);

  useEffect(() => {
    const initialLang = languages.find(
      (lang) => lang.code === i18n.language
    ) || { code: "en", lang: "ENG" };
    const alternateLang = languages.find(
      (lang) => lang.code !== i18n.language
    ) || { code: "et", lang: "EST" };
    setCurrentLanguage(initialLang.lang);
    setMenuLanguage(alternateLang.lang);
  }, [i18n.language]);

  console.log("Current language", currentLanguage);
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

    const pathname = location.pathname;

    // Extract the path after the language code
    const pathAfterLanguage = pathname.replace(/^\/[^/]+/, ""); // Remove the first segment

    if (newLanguageCode) {
      i18n.changeLanguage(newLanguageCode);
      navigate(`/${newLanguageCode}${pathAfterLanguage}`);
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
