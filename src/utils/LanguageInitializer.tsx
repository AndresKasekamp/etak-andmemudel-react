import  { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageInitializer = () => {
  const location = window.location.pathname;
  const { i18n } = useTranslation();

  useEffect(() => {
    // Extract language from the path (e.g., "/en/...")
    const pathname = location;
    const language = pathname.split("/")[1]; // Get the first part after "/"

    // Define supported languages
    const supportedLanguages = ["en", "et"]; // Add more as needed

    // Validate and set the language
    if (supportedLanguages.includes(language)) {
      i18n.changeLanguage(language);
    } else {
      i18n.changeLanguage("et"); // Default language
    }
  }, [location, i18n]);

  return null; // No UI, this is just for initialization
};

export default LanguageInitializer;
