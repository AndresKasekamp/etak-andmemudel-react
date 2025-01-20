import { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

const useUpdateTextContent = (elementId: string, initialText: string = "") => {
  useEffect(() => {
    // Set the initial text when the component mounts
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = initialText;
    }
  }, [elementId, initialText]);

  const updateTextContent = useCallback(
    (newText: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.textContent = newText;
      }
    },
    [elementId]
  );

  return updateTextContent;
};

const LanguageInitializer = () => {
  const { i18n } = useTranslation();
  const updateTitle = useUpdateTextContent("page-title", "ETAK Andmemudel");

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
    const handleLanguageChange = () => {
      if (i18n.language === "en") {
        updateTitle("ETAK Data Model");
      } else {
        updateTitle("ETAK Andmemudel");
      }
    };

    // Run the language update on mount
    updateLanguage();
    handleLanguageChange();

    // Add event listener for popstate
    window.addEventListener("popstate", updateLanguage);
    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("popstate", updateLanguage);
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, updateTitle]);

  return null; // No UI, this is just for initialization
};

export default LanguageInitializer;
