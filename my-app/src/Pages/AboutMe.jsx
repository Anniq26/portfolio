import React from 'react'
import styles from '../aboutmepg.module.css';
import {useTranslation} from 'react-i18next';
import imgPortfolio from '../style/IMG_3389 V2.jpg';
import CvFile1 from '../style/ანი ქიტოშვილი.pdf';
import CvFile2 from '../style/Ani Kitoshvili.pdf';
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';



const AboutMe = () => {
  const { t } = useTranslation()

  const handleDownload = (file) => {
    const link = document.createElement('a')
      link.href = file;
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

  const info = [
    {title: t('FirstName'), label: t('Ani')},
    {title: t('LastName'), label: t('Kitoshvili')},
    {title: t('Age'), label: t('AgeinNumbers')},
    {title: t('Freelance'), label: t('Available')},
    {title: t('Address'), label: t('AddressDetail')},
    {title: t('Languages'), label: `${t('Georgian')}, ${t('English')}, ${t('Russian')}`},    {title: t('phone'), label: '+995 551 11 56 76', path: '/contacts'},
    {title: t('e-post'), label: 'aniqitoshvili2012@gmail.com', path: '/contacts'},
  ]

  return (
    <div className={styles.aboutmepgwrapper}>
      <h2 className={styles.aboutmetitle}>{t('aboutme')}</h2>

      {/* first section */}

      <div className={styles.mainsectionwrapper}>
        <div className={styles.imgwrapper}>
          <img className={styles.imgmainstyle} src={imgPortfolio} alt="img" />
        </div>
        <div className={styles.txtwrapper}>
        {info.map(({title, label, path}) => (
          <div className={styles.textstylewrp}>
            <p className={styles.textstyle}>{title}:</p>
              {path ? (
                <Link to={path} className={styles.textstyle}>
                  <p style={{ cursor: 'pointer' } }>{label}</p>
                </Link>
              ) : (
                <p className={styles.textstyle}>{label}</p>
              )}
          </div>
        ))}
        </div>
      </div>


      {/* second section */}

      <div className={styles.downloadlinks}>
        <h2 className={styles.linkstitle}>{t('downloadCV')}</h2>
        <div className={styles.linkswrapper}>
          <button className={styles.linksbtn} onClick={() => handleDownload(CvFile1) }>{t('downloadCVGE')}</button>
          <button className={styles.linksbtn} onClick={() => handleDownload(CvFile2)}>{t('downloadCVEN')}</button>
        </div>
     </div>


    {/* third section */}

      <div>
        <Skills/>
      </div>
    </div>
  )
}

export default AboutMe