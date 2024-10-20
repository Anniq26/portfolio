import React from 'react'
import styles from '../bonhotel.module.css';
import imgOne from '../style/download 1.png';
import imgTwo from '../style/1.png';
import imgThree from '../style/2.png';
import imgFour from '../style/3.png';
import imgFive from '../style/4.png';
import imgSix from '../style/image 1 (1).png';
import { Link } from 'react-router-dom';




const Bonhotelpg1 = () => {
  return (
    <div>
    <div id="header"></div>

    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.headerflex}>
                <img src={imgOne} alt="img" />
                <nav className={styles.navigation}>
                    <Link to='#' className={styles.navlink}>Our Hotel</Link> 
                    <Link to='/bonhotelpg2' className={styles.navlink}>Rooms & Rates</Link> 
                    <Link to='#' className={styles.navlink}>Facilities</Link> 
                    <Link to='#' className={styles.navlink}>Contact Us</Link>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section className={styles.firstsection}>
            <div className={styles.firstsectioncontent}>
                <h1 className={styles.maintitle}>WELCOME TO BON HOTEL</h1>
                <p className={styles.description}>Good people. Good thinking. Good feeling.</p>
                <Link to='#' className={styles.button}>
                    EXPLORE
                </Link>
            </div>
        </section>


    <section className={styles.cards}>
        <div className={styles.container}>
            <h2 className={styles.secondtitle}>
                Rooms & Rates
            </h2>
           <div className={styles.roomsgallery}>
            <div className={styles.card}>
                <img src={imgTwo} alt="img" />
                <div className={styles.overlay}></div>
                <div className={styles.cardcontent}>
                    <h3 className={styles.cardtitle}>Standard Twin Room</h3>
                    <Link to='#' className={styles.buttonbuttonsmall}>Check Rates</Link>
                </div>
            </div>
            <div className={styles.card}>
                <img src={imgThree} alt="img" />
                <div className={styles.overlay}></div>
                <div className={styles.cardcontent}>
                    <h3 className={styles.cardtitle}>Standard Room</h3>
                    <Link to='#' className={styles.buttonbuttonsmall}>Check Rates</Link>
                </div>
            </div>
            <div className={styles.card}>
                <img src={imgFour} alt="img" />
                <div className={styles.overlay}></div>
                <div className={styles.cardcontent}>
                    <h3 className={styles.cardtitle}>Standard View Room</h3>
                    <Link to='#' className={styles.buttonbuttonsmall}>Check Rates</Link>
                </div>
            </div>
            <div className={styles.card}>
                <img src={imgFive} alt="img" />
                <div className={styles.overlay}></div>
                <div className={styles.cardcontent}>
                    <h3 className={styles.cardtitle}>Deluxe Room</h3>
                    <Link to='#' className={styles.buttonbuttonsmall}>Check Rates</Link>
                </div>
            </div>
            </div>
        </div>

    </section>


    <section className={styles.thirdtitle}> 
        <div className={styles.container}>
            <div className={styles.section3}>
                <h2 className={styles.secondtitle}>Get a room already!</h2>
                <Link to='#' className={styles.button}>Book Now</Link>
            </div>
        </div>
    </section>
    </main>



    <footer>
        <div className={styles.container}>
            <div className={styles.footercontent}>
                <img src={imgSix} alt="img" />
                <nav className={styles.footernavigation}>
                    <Link to='#' className={styles.footerlink}>Our Hotels</Link>
                    <Link to='#' className={styles.footerlink}>Our Conferencing</Link>
                    <Link to='#' className={styles.footerlink}>Our Company</Link>
                    <Link to='#' className={styles.footerlink}>Hotel Design</Link>
                    <Link to='#' className={styles.footerlink}>Careers</Link>
                </nav>
                <div className={styles.footertext}>
                    <p className={styles.footerparagraph}>Bon Hotels Head Office</p>
                    <div className={styles.linktext}>
                        <Link to='tel:+27 434 344 432 '>+27 434 344 432 </Link>
                        <Link to='mailto:info@bonhotels.com'>info@bonhotels.com</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Bonhotelpg1
