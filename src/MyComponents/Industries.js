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

const Industries = () => {
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
        <Link to="/approach">Insights</Link>
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

export default Industries
