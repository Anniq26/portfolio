import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../contacts.module.css';
import imgInstagram from '../style/instagramprofile.jpg';
import imgFacebook from '../style/facebookprofile.jpg';
import imgLinkedin from '../style/linkedinprofile.jpg';
import imgGithub from '../style/githubprofile.jpg';
import imgInsta from '../style/insta.png';
import imgFb from '../style/facebook.png';
import imgLinkd from '../style/linkedin.png';
import imgGit from '../style/25231 V2.png';
import { Link } from 'react-router-dom';

const Contacts = () => {
  const { t } = useTranslation();

  const contacts = [
    { title: t('phone'), number: "+995 551 11 56 76", path: "tel:+995551115676" },
    { title: t('e-post'), number: "aniqitoshvili2012@gmail.com", path: 'mailto:aniqitoshvili2012@gmail.com' },
    { title: "Instagram", picture: imgInsta, path: 'https://www.instagram.com/anikitoshvili_/', photo: imgInstagram },
    { title: "Facebook", picture: imgFb, path: 'https://www.facebook.com/ani.qitoshvili/', photo: imgFacebook },
    { title: "Linkedin", picture: imgLinkd, path: 'https://www.linkedin.com/in/akitoshvili1', photo: imgLinkedin },
    { title: "Github", picture: imgGit, path: 'https://github.com/Anniq26', photo: imgGithub },
  ];

  return (
    <div className={styles.pagewrapper}>
      <div className={styles.titleswrp}>
        <h2 className={styles.title}>{t('contactme')}</h2>
      </div>
      <div className={styles.infowrp}>
        {contacts.map(({ title, photo, picture, number, path }) => (
          <Link to={path} className={styles.txtstyle}> 
            <div className={styles.linkswrp}>
                {(title !== t('phone') && title !== t('e-post')) && (
                  <>
                    <div className={styles.imgswrp}>
                    <img className={styles.imgstyle} src={picture} alt={title} />
                    <img className={styles.imgstyle} src={photo} alt={title} />
                    </div>
                  </>
                )}
              <p >
                {title} 
                {number && (title === t('phone') || title === t('e-post')) ? ` ${number}` : ''}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
