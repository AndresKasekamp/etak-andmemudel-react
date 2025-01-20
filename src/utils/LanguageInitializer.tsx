import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageInitializer = () => {
  const { i18n } = useTranslation();

  const updateLanguage = () => {
    const location = window.location.pathname;
    const language = location.split("/")[1]; // Get the first part after "/"

    // Define supported languages
    const supportedLanguages = ["en", "et"]; // Add more as needed

    // Validate and set the language
    if (supportedLanguages.includes(language)) {
      i18n.changeLanguage(language);
    } else {
      i18n.changeLanguage("et"); // Default language
    }
  };

  useEffect(() => {
    // Run the language update on mount
    updateLanguage();

    // Add event listener for popstate
    window.addEventListener("popstate", updateLanguage);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("popstate", updateLanguage);
    };
  }, [i18n]);

  return null; // No UI, this is just for initialization
};

export default LanguageInitializer;
