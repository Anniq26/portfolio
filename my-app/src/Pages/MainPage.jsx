import React from 'react'
import styles from '../mainpage.module.css';
import imgMain from '../style/1700520198938.png';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next'
import ImgPrjOne from '../style/6f9e7484-b76c-45e5-806d-f86b7f3f834c.jpg';
import ImgPrjTwo from '../style/973aef13-9621-4610-a549-af59cc8e07fc.jpg';
import ImgPrjThree from '../style/2ccf099f-843b-49e9-9554-6792c15a5dc5.jpg';


const MainPage = () => {

  const { t } = useTranslation()

  const projects = [
    {path: '/', label: t('project1') , image: ImgPrjOne },
    {path: '/', label: t('project2') , image: ImgPrjTwo },
    {path: '/', label: t('project3') , image: ImgPrjThree }
  ]

  return (
    <div className={styles.mainpagewrapper}>

      {/* first section */}
      <div className={styles.mainsection}>
        <img className={styles.imgmainstyle} src={imgMain} alt="img" />
        <div className={styles.mainsectitles}>
          <h1 className={styles.maintitle}>{'<coder>'}</h1>
          <h2 className={styles.secondarytitle}>{t('maintext')}</h2>
          <h2 className={styles.secondarytitle}>{t('maintext2')}</h2>
          <Link to='/portfolio'>
            <button className={styles.mainsecbtn}>{t('portfolio')}</button>
          </Link> 
        </div>
      </div>

    {/* second section */}
    <div className={styles.cardssection}>
      <h2 className={styles.secondarytitle}>{t('recent')}</h2>
      <div className={styles.cardswrapper}>
      {projects.map(({path, label, image}) => (
        <div className={styles.cardstyle}>
          <img className={styles.cardimg} src={image} alt="img" />
          <div className={styles.overlay}></div>
          <h3 className={styles.cardtitle}>{label}</h3>
        </div>
      ))}
      </div>
      <div className={styles.buttonwrapper}>
      <Link to='/portfolio' style={{ textDecoration: 'none' }}>
      <button className={styles.seeallbutton}>{t('see all')}</button>
        </Link>
      </div>
    </div>

    </div>
  )
}

export default MainPage