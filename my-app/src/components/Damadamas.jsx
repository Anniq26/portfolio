import React from 'react';
import styles from '../damadamas.module.css';
import imgOne from '../style/Damadams.png';
import imgTwo from '../style/Rectangle 394.png';
import imgThree from '../style/Vector.png';
import imgFour from '../style/Figma Icon.png';
import imgFive from '../style/ai.png';
import imgSix from '../style/Rectangle 1181.png';
import imgSeven from '../style/Rectangle 1181 (1).png';
import imgEight from '../style/Rectangle 1181 (2).png';
import imgNine from '../style/Rectangle 1181 (3).png';
import imgTen from '../style/Rectangle 1181 (4).png';
import imgEleven from '../style/Rectangle 1181 (5).png';
import imgTwelve from '../style/Path 110.png';
import imgThirteen from '../style/Path 50.png';
import imgFourteen from '../style/Vector (1).png';
import imgFifteen from '../style/Vector (5).png';
import imgSixteen from '../style/Vector (2).png';
import imgSeventeen from '../style/Vector (3).png';
import imgEighteen from '../style/Vector (4).png';
import { Link } from 'react-router-dom';

const Damadamas = () => {
  return (
    <div>
        <header >
    <div className={styles.container}>
        <div className={styles.header}>
            <img src={imgOne} alt="img" />            
            <div className={styles.navigation}>
                <Link to='#' className={styles.navlink}>Home</Link>
                <Link to='#' className={styles.navlink}>About</Link>
                <Link to='#' className={styles.navlink}>Latest Works</Link>
                <Link to='#' className={styles.navlink}>Contact</Link>
            </div>
        </div>
    </div>
</header>


{/* section 1 */}
<section className={styles.sectionfirst}>
    <div className={styles.containerwrapper}>
        <div className={styles.firstseccontent}>
            <div className={styles.firstsectext}>
                <p className={styles.hellotext}>Hello,</p>
                <p className={styles.firsttext}>I’m</p>
                    <span className={styles.firsttext} span>Daniella Adams</span>
                <p className={styles.secondarytext} id="myText-first">I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting.</p>
                <Link to='#' className={styles.button}>Download CV</Link>
            </div>
            <div className={styles.imgwrapper}>
                <img className={styles.img} src={imgTwo} alt="img" />
            </div>
        </div>
    </div>
</section>


{/*  section 2 */}

<section className={styles.secondsection}>
    <div className={styles.containerwrapper}>
        <div className={styles.secondseccontent}>
            <img className={styles.img} src={imgTwo} alt="img" />
                <div className={styles.secondsecp2}>
                    <div className={styles.secondsectext}>
                    <h2 className={styles.secondtitle}>I am a creative Graphic & UI Designer</h2>
                    <p className={styles.secondarytext} id="myText-second">I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting,Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className={styles.buttons}>
                        <Link to='#' className={styles.button} >Download CV</Link>
                        <Link to='#' className={styles.button} id="button-second">View Portfolio</Link>
                    </div>
                </div>
                
                <div className={styles.progresses}>
                <div className={styles.imgprogress}>
                    <img src={imgThree} alt="img" />
                    <div className={styles.progress}>
                        <div className={`${styles.progressbar} ${styles.bar1}`}>70%</div>
                    </div>
                </div>
                <div className={styles.imgprogress}>
                    <img src={imgFour} alt="img" />
                    <div className={styles.progress}>
                        <div className={`${styles.progressbar} ${styles.bar2}`}>50%</div>
                    </div>
                </div>
                <div className={styles.imgprogress}>
                    <img src={imgFive} alt="img" />
                    <div className={styles.progress}>
                        <div className={`${styles.progressbar} ${styles.bar3}`}>80%</div>
                    </div>  
                </div>    
            </div>



            </div>
        </div>
    </div>
</section>



{/* section 3 */}

<section className={styles.thirdsection}>
    <div className={styles.projectsinfo}>
        <p className={styles.number}>81+</p>
        <p>HAPPY CUSTOMERS</p>
    </div>
    <div className={styles.projectsinfo}>
        <p className={styles.number}>97+</p>
        <p>COMPLETED PROJECTS</p>
    </div>
    <div className={styles.projectsinfo}>
        <p className={styles.number}>50</p>
        <p>AWARDS WON</p>
    </div>
</section>



{/* section 2 */}

<section className={styles.latestwork}>
    <div className={styles.thirdsecwrapper}>
        <h2 className={styles.secondtitle} id="latestworktitle">Latest work</h2>
        <div className={styles.cards}>
            <div className={styles.card}>
                <img src={imgSix} alt="img" />
                <div className={styles.cardtitles}>
                    <h3>Project title</h3>
                    <h4>UI, Art drection</h4>
                </div>
            </div>
            <div className={styles.card}>
                <img src={imgSeven} alt="img" />
                <div className={styles.cardtitles}>
                    <h3>Project title</h3>
                    <h4>UI, Art drection</h4>
                </div>
            </div>
            <div className={styles.card}>
                <img src={imgEight} alt="img" />
                <div className={styles.cardtitles}>
                    <h3>Project title</h3>
                    <h4>UI, Art drection</h4>
                </div>
            </div>
            <div className={styles.card}>
                <img src={imgNine} alt="img" />
                <div className={styles.cardtitles}>
                    <h3>Project title</h3>
                    <h4>UI, Art drection</h4>
                </div>
            </div>
            <div className={styles.card}>
                <img src={imgTen} alt="img" />
                <div className={styles.cardtitles}>
                    <h3>Project title</h3>
                    <h4>UI, Art drection</h4>
                </div>
            </div>

            <div className={styles.card}>
                <img src={imgEleven} alt="img" />
                <div className={styles.cardtitles}>
                    <h3 className={styles.thirdtitle}>Project title</h3>
                    <h4 className={styles.fourthtitle}>UI, Art drection</h4>
                </div>
            </div>
        </div>
       
    </div>

</section>






{/* footer */}

<section className={styles.footer}>
    <div className={styles.contact}>
        <Link to='tel:09028793244'> <img src={imgTwelve} alt="img" id='icon'/>09028793244</Link>
        <Link to='mailto:shalewa64@gmAil.com'><img src={imgThirteen} alt="img" id='icon'/>shalewa64@gmAil.com</Link>
        <Link to='#'>497 Evergreen Rd. Roseville, CA 95673</Link>
    </div>
    <div className={styles.icons}>
        <img src={imgFourteen} alt="img" className={styles.socicon}/>
        <img src={imgFifteen} alt="img" className={styles.socicon}/>
        <img src={imgSixteen} alt="img" className={styles.socicon}/>
        <img src={imgSeventeen} alt="img" className={styles.socicon}/>
        <img src={imgEighteen} alt="img" className={styles.socicon}/>
    </div>
</section>
      
    </div>
  )
}

export default Damadamas
