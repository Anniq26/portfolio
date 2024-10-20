import React from 'react'
import styles from '../bonhotel.module.css';
import imgOne from '../style/download 1.png';
import imgTwo from '../style/5.png';
import imgThree from '../style/6.png';
import imgFour from '../style/7.png';
import imgFive from '../style/8.png';
import imgSix from '../style/9.png';
import imgSeven from '../style/10.png';
import imgEight from '../style/11.png';
import imgNine from '../style/12.png';
import imgTen from '../style/image 1 (1).png';
import { Link } from 'react-router-dom';


const Bonhotelpg2 = () => {
  return (
    <div>
      <header  className={styles.header}>
    <div  className={styles.container}>
        <div  className={styles.headerflex}>
            <img src={imgOne} alt="img" />
            <nav  className={styles.navigation}>
                <Link to='/bonhotelpg1'  className={styles.navlink}>Our Hotel</Link> 
                <Link to='#'  className={styles.navlink}>Rooms & Rates</Link> 
                <Link to='#'  className={styles.navlink}>Facilities</Link> 
                <Link to='#'  className={styles.navlink}>Contact Us</Link>
            </nav>
        </div>
    </div>
</header>
<main>
<section  className={styles.section1}>
    <div  className={styles.container} id="news-cards">
        <h2  className={styles.secondtitle}>Rooms & Rates</h2>
        <div  className={styles.newscard}>
            <img src={imgTwo} alt="img" />
            <div  className={styles.newscardcontent}>
                <h3  className={styles.cardtitle}>Standard Twin Room</h3>
                <p  className={styles.cardtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis urna id arcu mattis porttitor laoreet at eros.
                </p>
                <Link to='#'  className={styles.buttonbuttonsmall}>Check Rates</Link>
            </div>
        </div>
        <div  className={styles.newscard}>
            <img src={imgThree} alt="img" />
            <div  className={styles.newscardcontent}>
                <h3  className={styles.cardtitle}>Standard Room</h3>
                <p  className={styles.cardtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis urna id arcu mattis porttitor laoreet at eros.
                </p>
                <Link to='#'  className={styles.buttonbuttonsmall}>Check Rates</Link>
            </div>
        </div>
        <div  className={styles.newscard}>
            <img src={imgFour} alt="img" />
            <div c className={styles.newscardcontent}>
                <h3  className={styles.cardtitle}>Standard View Room</h3>
                <p c className={styles.cardtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis urna id arcu mattis porttitor laoreet at eros.
                </p>
                <Link to='#'  className={styles.buttonbuttonsmall}>Check Rates</Link>
            </div>
        </div>
        <div  className={styles.newscard}>
            <img src={imgFive} alt="img" />
            <div  className={styles.newscardcontent}>
                <h3  className={styles.cardtitle}>Deluxe Room</h3>
                <p  className={styles.cardtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis urna id arcu mattis porttitor laoreet at eros.
                </p>
                <Link to='#'  className={styles.buttonbuttonsmall}>Check Rates</Link>
            </div>
        </div>
    </div>
</section>

<section  className={styles.newssectionlast}>
    <div  className={styles.container}>
        <h2  className={styles.secondtitle}>Gallery</h2>
        <div  className={styles.gallerygrid}>
            <img src={imgSix} alt="img" />
            <img src={imgSeven} alt="img" />
            <img src={imgEight} alt="img" />
            <img src={imgNine} alt="img" />
        </div>
    </div>
</section>

</main>


<footer>
    <div  className={styles.container}>
        <div  className={styles.footercontent}>
            <img src={imgTen} alt="img" />
            <nav  className={styles.footernavigation}>
                <Link to='#'  className={styles.footerlink}>Our Hotels</Link>
                <Link to='#'  className={styles.footerlink}>Our Conferencing</Link>
                <Link to='#'  className={styles.footerlink}>Our Company</Link>
                <Link to='#'  className={styles.footerlink}>Hotel Design</Link>
                <Link to='#'  className={styles.footerlink}>Careers</Link>
            </nav>
            <div  className={styles.footertext}>
                <p className={styles.footerparagraph}>Bon Hotels Head Office</p>
                <div  className={styles.linktext}>
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

export default Bonhotelpg2
