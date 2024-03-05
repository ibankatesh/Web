import React, { useState} from 'react';
import '../Assets/styles/header.css';
import '../Assets/styles/industries.css';

import logo from '../Assets/images/NyK.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import img5 from '../Assets/images/img5.jpg';
import img6 from '../Assets/images/img6.jpg';

import imgHeaderIndustries from '../Assets/images/header-1.jpeg';
import { Link } from 'react-router-dom';

const Insights = () => {
  const [visible] = useState(true);
  
  

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
<header class="header">
            <nav class="nav container">
                <div class="nav__data">
                    <a href="#" class="nav__logo">
                        <i class="ri-code-s-slash-line"></i> CodeBox
                    </a>
    
                    <div class="nav__toggle" id="nav-toggle">
                        <i class="ri-menu-line nav__toggle-menu"></i>
                        <i class="ri-close-line nav__toggle-close"></i>
                    </div>
                </div>

               
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li>
                            <a href="#" class="nav__link">Home</a>
                        </li>

                     
                        <li class="dropdown__item">                      
                            <div class="nav__link dropdown__button">
                                Discover <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>

                            <div class="dropdown__container">
                                <div class="dropdown__content">
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-flashlight-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Most viewed courses</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">HTML for beginners</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Advanced CSS</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">JavaScript OOP</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-heart-3-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Popular courses</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">Development with Flutter</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Web development with React</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Backend development expert</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-book-mark-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Careers</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">Web development</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Applications development</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">UI/UX design</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Informatic security</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-file-paper-2-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Certifications</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">Course certificates</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Free certifications</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                      
                        <li class="dropdown__item">
                            <div class="nav__link dropdown__button">
                                Resources <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>

                            <div class="dropdown__container">
                                <div class="dropdown__content">
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-code-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Web templates</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">Free templates</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Premium templates</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-pen-nib-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Designs</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">Web designs</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">App designs</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Component design</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-apps-2-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Others</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">Recent blogs</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Tutorial videos</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Webinar</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <a href="#" class="nav__link">Pricing</a>
                        </li>

                      
                        <li class="dropdown__item">                        
                            <div class="nav__link dropdown__button">
                                Company <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>

                            <div class="dropdown__container">
                                <div class="dropdown__content">
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-community-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">About us</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">About us</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Support</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Contact us</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-shield-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Safety and quality</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">Cookie settings</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        
  <div style={{ height: '90px' }}></div>





  <header class="header1" id="home" 
   style={{
    width: '100%', 
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0), #0a1e27), url(${imgHeaderIndustries})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
    transform: 'translateZ(0)'
  }}>
      
      <div class="section1__container header1__container">
        <div class="header1__content">
          <h3 class="section1__subheader">OUR INDUSTRIES</h3>
          <h1 class="section1__header">
          Reimagine Retail with an AI-first approach!
          </h1>
        </div>
       
      </div>
    </header>
    <section class="about1">
      <div class="section1__container about1__container">
      <h3 style={{color:'white'}} class="section__subheader">Retail</h3>
        <div class="about1__content about1__content-1">
          
          <h2 class="section1__header">Revolutionize Retail through Cutting-Edge AI Solutions</h2>
          <p>
          Unlock the potential of data-driven insights and artificial intelligence to revolutionize the retail landscape. 
          NyKinSky Research & Analytics offers innovative solutions designed to propel retailers towards unprecedented growth and success..
          </p>
          <div class="about1__btn">
            <Link to="#">
              Read more
              <span><i class="ri-arrow-right-line"></i></span>
            </Link>
          </div>
        </div>
        
        <div class="about1__content about1__content-2">
          
          <h2 class="section1__header">Elevate Retail Operations with Next-Generation Solutions</h2>
          <p>
          In today's fast-paced retail environment, staying competitive requires more than just traditional analytics. NyKinSky Research & Analytics empowers retailers to reimagine their operations with agile, future-proof solutions that adapt to evolving market dynamics.
          </p>
          <div class="about1__btn">
            <Link to="#">
              Read more
              <span><i class="ri-arrow-right-line"></i></span>
            </Link>
          </div>
        </div>
        
        <div class="about1__content about1__content-3">
          
          <h2 class="section1__header">Transforming Retail with Advanced AI Capabilities</h2>
          <p>
          NyKinSky Research & Analytics specializes in providing retailers with advanced AI and analytics solutions tailored to meet the demands of an ever-changing technological landscape. Our expertise in AI/ML, coupled with simulation capabilities and data-driven decision support frameworks, ensures that retailers can thrive amidst uncertainty and complexity.
          </p>
          <div class="about1__btn">
            <Link to="#">
              Read more
              <span><i class="ri-arrow-right-line"></i></span>
            </Link>
          </div>
        </div>
      </div>
    </section>

















 




  
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
  )
}

export default Insights
