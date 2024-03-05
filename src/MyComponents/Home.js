import React, { useState, useEffect} from 'react';
import logo from '../Assets/images/NyK.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons


import img3 from '../Assets/images/img3.jpg';

import img5 from '../Assets/images/img5.jpg';
import img6 from '../Assets/images/img6.jpg';
import img7 from '../Assets/images/img7.jpg';
import img8 from '../Assets/images/img8.jpg';

import '../Assets/styles/index.css';
import '../Assets/styles/carousel.css';
import '../Assets/styles/footer.css';
import '../Assets/styles/header.css';
import '../Assets/styles/MidSection.css';

import { Link } from 'react-router-dom';

import Slider from '../MyComponents/Slider';


function Home() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    
    
   

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = currentScrollPos < prevScrollPos || currentScrollPos < 10;
         
            setVisible(isVisible);
           
            setPrevScrollPos(currentScrollPos);
            
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleLogoClick = () => {
        // Redirect to the home page
        window.location.href = '/';
    };

    const handleLogoClick1 = () => {
      // Redirect to the home page
      window.location.href = '/about-us';
  };

    
    return (
        <div>
        
        <nav className='nav1 navbar-scrolled'  style={{ visibility: visible ? 'visible' : 'hidden', backgroundColor:'#312f36',position: 'fixed', width: '100%', zIndex: '1000' }}>
      <div className="wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="NyKinSky Logo" className="logo-image" style={{ width: '80px', height: 'auto', paddingTop: '10px', cursor: 'pointer' }} />
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><FontAwesomeIcon icon={faTimes} /></label>


  
        
        <li style={{ marginRight: '20px'}}>
        <Link to="/what-we-do">What We do</Link>
          <input type="checkbox" id="showMega" />
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src={img5} alt="" />
              </div>
              <div className="row">
                <header>Digital Business Transformation</header>
                <ul className="mega-links">
                  <li>
                  <Link to="/what-we-do">Aritifical Intelligence(AI)</Link>
                  </li>
                  <li><Link to="#">Cloud Transformation</Link></li>
                  <li><Link to="#">Data Analytics</Link></li>
                  <li><Link to="#">Managed Security Services</Link></li>
                </ul>
              </div>
              <div className="row">
                <header>Digital Solution</header>
                <ul className="mega-links">
                  <li><Link to="#">Scaled Operations</Link></li>
                  <li><Link to="#">SaaS and Enterprise Apps</Link></li>
                  <li><Link to="#">Next Gen Talent</Link></li>
                  <li><Link to="#">Digital Services</Link></li>
                </ul>
              </div>
              <div className="row">
                <header>Platforms</header>
                <ul className="mega-links">
                  <li><Link to="#">Cyber Proof</Link></li>
                  <li><Link to="#">SmartOps</Link></li>
                  <li><Link to="#">Privacy Seal</Link></li>
                  <li><Link to="#">Website design</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>


        
        <li style={{ marginRight: '20px' }}>
        <Link to="/indsutries">Industries</Link>
          <input type="checkbox" id="showMega" />
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src={img6} alt="" />
              </div>
              <div className="row">  
                <ul className="mega-links">
                  <li><Link to="#">Retail</Link></li>
                  <li><Link to="#">CPG</Link></li>
                  <li><Link to="#">BFS</Link></li>
                  <li><Link to="#">Insurance</Link></li>
                  <li><Link to="#">Manufacturing</Link></li>
                </ul>
              </div>
              <div className="row">  
                <ul className="mega-links">
                 
                  <li><Link to="#">Transportation & logistics</Link></li>
                  <li><Link to="#">Life Sciences</Link></li>
                  <li><Link to="#">HealthCare</Link></li>
                  <li><Link to="#">Technology, Telecom & Media  </Link></li>
                </ul>
              </div>
              <div className="row">
                <ul className="mega-links">
                  <li><Link to="#">Site Seal</Link></li>
                  <li><Link to="#">VPS Hosting</Link></li>
                  <li><Link to="#">Privacy Seal</Link></li>
                  <li><Link to="#">Website design</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>




        <li style={{ marginRight: '20px' }}>
        <Link to="/approach">Our Approach</Link>
          <input type="checkbox" id="showMega" />
          <div className="mega-box">
            <div className="content">
              <div className="row">
                
                <img src="img.jpg" alt="" />
              </div>
              <div className="row">
                <header>Design Services</header>
                <ul className="mega-links">
                  <li><Link to="#">Graphics</Link></li>
                  <li><Link to="#">Vectors</Link></li>
                  <li><Link to="#">Business cards</Link></li>
                  <li><Link to="#">Custom logo</Link></li>
                </ul>
              </div>
              <div className="row">
                <header>Email Services</header>
                <ul className="mega-links">
                  <li><Link to="#">Personal Email</Link></li>
                  <li><Link to="#">Business Email</Link></li>
                  <li><Link to="#">Mobile Email</Link></li>
                  <li><Link to="#">Web Marketing</Link></li>
                </ul>
              </div>
              <div className="row">
                <header>Security services</header>
                <ul className="mega-links">
                  <li><Link to="#">Site Seal</Link></li>
                  <li><Link to="#">VPS Hosting</Link></li>
                  <li><Link to="#">Privacy Seal</Link></li>
                  <li><Link to="#">Website design</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        

        <li style={{ marginRight: '20px' }}>
        <Link to="/our-partners">Our Partners</Link>
      </li>


        <li style={{ marginRight: '20px' }}>
        <Link to="/insights">Insights</Link>
          <input type="checkbox" id="showMega" />
          <div className="mega-box">
            <div className="content">
              <div className="row">
              <ul className="mega-links">
                  <li><Link to="#">Visionary Viewpoints</Link></li>
                
                </ul>
              </div>
              <div className="row">
                
                <ul className="mega-links">
                  <li><Link to="#">Case Studies</Link></li>
                
                </ul>
              </div>
              <div className="row">
                
                <ul className="mega-links">
                  <li><Link to="#">Insights</Link></li>
                </ul>
              </div>
              <div className="row">
              
                <ul className="mega-links">
                  <li><Link to="#">WhitePapers</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        
        <li style={{ marginRight: '20px' }}><Link to="#">Careers</Link></li>   
      </ul>
      <label htmlFor="menu-btn" className="btn menu-btn"><FontAwesomeIcon icon={faBars} /></label>
    </div>
  
  </nav>
  <div style={{ height: '115px' }}></div>


    
    <Slider /> 
    
   

  

            {/* Mid Section */}
            <div id="main-section1" className="landing-page-main mid-section">
    <div className="left-aligned">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="image-container">
          <img src={img3} alt="Client Impact" className="zoom-image auto-hover" />
        </div>
        <div style={{ flex: '1' }}>
          <div>
            <h4><b>WHO WE ARE</b></h4>
            <h1><b>Digital is our DNA</b></h1>
            <span>We’re listeners and leaders, working together to take on tomorrow’s challenges.</span>
          </div>
          <div>
            <button className="learn-more-btn">Learn More  <span>&rarr;</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>


            {/* Middle Section 2 */}
    <div id="main-section" className="landing-page-main mid-section sky-blue-background ">
      <div className="left-aligned" style={{ paddingTop: '50px' }}> {/* Adding padding from the top */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> {/* Centering content */}
          <div style={{ flex: '1', textAlign: 'center' }}> {/* Centering text */}
            <div className='text'>
              <h4><b>OUR APPROACH</b></h4>
              <h1><b>Your journey is our journey</b></h1>
              <span>Discover how we can help your business design and chart the best path forward.</span>
            </div>
            <div>
              <button className="learn-more-btn">Learn More  <span>&rarr;</span></button>
            </div>
          </div>
          <div style={{ flex: '1' }}> {/* Aligning image to the center */}
            <img src={img7} alt="Client Impact" className="zoom-image auto-hover1" />
          </div>
        </div>
      </div>
    </div>

   
    <div id="main-section2" className="landing-page-main mid-section sky-red-background">
        <div className="left-aligned" style={{ paddingLeft: '20px', paddingTop: '50px' }}>
          <h6 style={{ marginBottom: '10px', textAlign: 'left'}}><b>/ MEMBERS</b></h6>
          <h2 style={{ margin: '0' ,paddingBottom:'30px'}}>Our Team</h2>
        </div>
        <div className="landing-page-cards-container">
          <div className="place-card-container">
            <div className="image-container">
              <img
                alt="London"
                src={img8}
                className="place-card-image"
              />

            </div>
            <div className="place-card-container1">
              <span className="place-card-text"><span>XYZ</span></span>
              <span className="place-card-text1">
                <span>
                  UST's digital transformation strategy blends human expertise with technical capabilities to kick business transformation for various companies into gear—and keep the momentum going.
                </span>
              </span>
            </div>
          </div>
          <div className="place-card-container">
            <div className="image-container">
              <img
                alt="Rome"
                src={img8}
                className="place-card-image"
              />

            </div>
            <div className="place-card-container1">
              <span className="place-card-text"><span>XYZ</span></span>
              <span className="place-card-text1">
                <span>
                If you're looking to elevate your customer experiences or build new products, we’re ready to help you deliver on your vision at speed, cost, and scale. Led by a team of technologists and engineers, we’ll productize your ideas.
                </span>
              </span>
            </div>
          </div>
          <div className="place-card-container">
            <div className="image-container">
              <img
                alt="Cluj-Napoca"
                src={img8}
                className="place-card-image"
              />

            </div>
            <div className="place-card-container1">
              <span className="place-card-text"><span>XYZ</span></span>
              <span className="place-card-text1">
                <span>
                  We deliver swift, sustainable solutions, so you can empower your people, improve your processes and transform your technology in a safe, secure environment.
                </span>
              </span>
            </div>
          </div>
          
        </div>
      </div>


            {/* Footer Section */}
            <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><Link to="#">our services</Link></li>
            <li><Link to="#">privacy policy</Link></li>
            <li><Link to="#">affiliate program</Link></li>
          </ul>
        </div>
        <div class="footer-col" onClick={handleLogoClick1}>
          <h4>about us</h4>
          <ul>
            <li><Link to="" >Who we are</Link></li>
            <li><Link to="">Our Journey & Story </Link></li>
            <li><Link to="#">Events</Link></li>
            <li><Link to="#">Social Commitment</Link></li>
            <li><Link to="#">Ledership team</Link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Careers</h4>
          <ul>
            <li><Link to="#">Explore opportunities</Link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
              <Link to="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
              <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
              <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link to="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
            </div>
        </div>
      </div>
    </div>
    <hr style={{ borderColor: "white" }} /> {/* Horizontal line with white color */}
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <p style={{ color: "white" }}>&copy; <span style={{ whiteSpace: 'nowrap' }}>{new Date().getFullYear()} NyKinSky & Company. All rights reserved.</span></p>
          </div>
        </div>
      </div>
 </footer>
        </div>
    );
}

export default Home;