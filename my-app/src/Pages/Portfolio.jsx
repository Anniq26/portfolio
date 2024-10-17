import React from 'react';
import ImgPrjOne from '../style/6f9e7484-b76c-45e5-806d-f86b7f3f834c.jpg';
import ImgPrjTwo from '../style/973aef13-9621-4610-a549-af59cc8e07fc.jpg';
import ImgPrjThree from '../style/2ccf099f-843b-49e9-9554-6792c15a5dc5.jpg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from '../portfolio.module.css';

const Portfolio = () => {
  const { t } = useTranslation();
  
  const projects = [
    { path: 'https://github.com/Anniq26/Project', label: t('project1'), image: ImgPrjOne },
    { path: '/bonhotelp1.html', label: t('project2'), image: ImgPrjTwo },
    { path: '/damadamas.html', label: t('project3'), image: ImgPrjThree },
  ];

  return (
    <div className={styles.prtfwrp}>
      <h2 className={styles.title}>{t('portfolio')}</h2>
      <div className={styles.cardsmnwrp}>
        {projects.map(({ path, label, image }) => (
          <Link key={label} to={path} className={styles.cardswrp} 
          onClick={(e) =>{    e.preventDefault(); // Prevent default behavior
            window.location.assign(path); // Navigate to the external HTML file
          }}> {/* Added key and path */}
            <img className={styles.cardimg} src={image} alt={label} /> {/* Updated alt text */}
            <div className={styles.overlay}></div>
            <h3 className={styles.cardtitle}>{label}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
