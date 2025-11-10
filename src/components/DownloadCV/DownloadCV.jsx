import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./DownloadCV.module.css";
import { getImageUrl } from "../../utils";
import cvFR from "../../assets/cv/Oumaima_AitSaid_CV_FR (2).pdf";
import cvEN from "../../assets/cv/Oumaima_AitSaid_CV_FR (2).pdf";
import cvDE from "../../assets/cv/Lebenslauf_Nabil_Ettihadi.pdf";

export const DownloadCV = () => {
  const { t, i18n } = useTranslation();

  const handleDownload = () => {
    const cvFiles = {
      fr: cvFR,
      en: cvEN,
      de: cvDE
    };

    const currentLang = i18n.language;
    const cvFile = cvFiles[currentLang] || cvFiles.fr;
    
    window.open(cvFile, '_blank');
  };

  return (
    <button onClick={handleDownload} className={styles.downloadBtn}>
      <img 
        src={getImageUrl("icons/download.png")} 
        alt="download icon" 
        className={styles.downloadIcon}
      />
      {t('hero.downloadCV')}
    </button>
  );
}; 