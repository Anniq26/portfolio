import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import imgLogo from '../style/logo page.png';
import styles from '../header.module.css';
import ChangeLanguage from '../components/ChangeLanguage';

const Header = () => {
  const { t } = useTranslation(); // Access the translation function

  const links = [
    { path: '/main', label: t('main') }, // Use translation function here
    { path: '/aboutme', label: t('aboutme') }, // Assuming you add this key to the translation files
    { path: '/portfolio', label: t('portfolio') }, // Assuming you add this key to the translation files
    { path: '/contacts', label: t('contacts') }, // Assuming you add this key to the translation files
  ];

  return (
    <div className={styles.headerwrapper}>
      <div className={styles.header}>
        <Link to='/main'><img src={imgLogo} alt="img" className={styles.imglogo}/></Link>
        <div className={styles.linkscontainer}>
          {links.map(({ path, label }) => (
            <Link 
              key={path}
              to={path}
              className={styles.linkswrapper}
            >
              <h3 className={styles.headerlink}>{label}</h3>
            </Link>
          ))}
          <ChangeLanguage />
        </div>
      </div>
    </div>
  );
};

export default Header;
