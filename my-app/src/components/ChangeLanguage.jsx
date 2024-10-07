import React from 'react';
import { useTranslation } from 'react-i18next'; // Make sure you're using the hook
import georgianIcon from '../style/georgia.png';
import englishIcon from '../style/english.png';
import styles from '../header.module.css';

const ChangeLanguage = () => {
  const { i18n } = useTranslation(); // Ensure i18n is accessed from the useTranslation hook

  const handleLanguageToggle = () => {
    const newLanguage = i18n.language === 'ge' ? 'en' : 'ge'; // Toggle between Georgian and English
    i18n.changeLanguage(newLanguage); // Switch language using i18n
    console.log(`Language changed to: ${newLanguage}`);
  };

  const currentLanguage = i18n.language === 'ge' ? 'georgian' : 'english';

  return (
    <div className={styles.ChangeLanguage} style={{ position: 'relative' }}>
      <img
        src={currentLanguage === 'georgian' ? georgianIcon : englishIcon}
        alt={currentLanguage === 'georgian' ? 'Georgian' : 'English'}
        onClick={handleLanguageToggle} // Switch language on click
        style={{ cursor: 'pointer' }}  // Add cursor pointer for better UX
        className={styles.chlimg}
      />
    </div>
  );
};

export default ChangeLanguage;
