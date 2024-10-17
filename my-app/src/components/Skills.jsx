import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../aboutmepg.module.css';


const Skills = () => {
    const { t } = useTranslation()

    const Skills = [
        {skill: 'React', know: '60%'},
        {skill: 'JavaScript', know: '50%'},
        {skill: 'HTML', know: '70%'},
        {skill: 'CSS', know: '70%'},
        {skill: 'WordPress', know: '60%'},
        {skill: 'PHP', know: '40%'}
    ]


  return (
    <div className={styles.thirdsecwrp}>
        <h2 className={styles.aboutmetitle}>{t('Myskills')}</h2>
        <div className={styles.skillswrapper}>
            {Skills.map(({skill, know}) => (
                <div className={styles.skillstyle}>
                    <p className={styles.linkstitle}>{skill}</p>
                    <div className={styles.progressbar}>
                        <div className={styles.progressline}
                                style={{width: know}}>
                            <p className={styles.progress}>{know}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Skills
