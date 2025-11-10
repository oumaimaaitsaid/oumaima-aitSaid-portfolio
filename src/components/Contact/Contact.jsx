import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.subtitle')}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:oumaimaaitsaid.dev@gmail.com">oumaimaaitsaid.dev@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phoneIcon.png")} alt="Phone icon" />
          <a href="tel:+212777694736">07 77 69 47 36</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/oumaima-ait-said/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/oumaimaaitsaid" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};
