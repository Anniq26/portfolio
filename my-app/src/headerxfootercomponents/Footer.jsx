import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../footer.module.css';
import imgInsta from '../style/insta.png';
import imgFb from '../style/facebook.png';
import imgLinkedin from '../style/linkedin.png';
import imgGithub from '../style/25231 V2.png';
import { useTranslation } from 'react-i18next'; // Import useTranslation




const Footer = () => {
    const { t } = useTranslation();

    const Contacts = [
      { label: t('phone'), number: "+995 551 11 56 76"},
      { label: t('e-post'), number:"aniqitoshvili2012@gmail.com"},
    ]
    
    const Images = [
      { title: "instagram", picture: imgInsta, path: 'https://www.instagram.com/anikitoshvili_/'},
      { title: "facebook", picture: imgFb, path: 'https://www.facebook.com/ani.qitoshvili/'},
      { title: "linkedin", picture: imgLinkedin, path: 'https://www.linkedin.com/in/akitoshvili1'},
      { title: "github", picture: imgGithub, path: 'https://github.com/Anniq26'},
    ]
    
  return (
    <div className={styles.footercontainer}>
        <div className={styles.info}>
            <p>© 2024 Ani Kitoshvili</p>
        </div>
        <div className={styles.contactswrapper}>
          <h5 className={styles.contacttitle}>{t('contacts')}</h5>
          <div>
            {Contacts.map(({label, number}) => (
              <Link className={styles.contactsinfo} key={label} to='/contacts'>
                <div className={styles.contactsinfo}>
                  <h5>{label}:</h5>
                  <h5>{number}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
            <div className={styles.imgiconsmainwrapper}>
            {Images.map(({path, picture}) => (
                <Link 
                key={path}
                to={path}>
                  <div className={styles.imgiconwrapper}> 
                      <img className={styles.iconimage} src={picture} alt="img" />   
                  </div>             
                </Link>
              ))}
              </div>
    </div>
  )
}

export default Footer