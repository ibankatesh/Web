import React, { useState} from 'react';
import '../Assets/styles/header.css';
import logo from '../Assets/images/NyK.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import img5 from '../Assets/images/img5.jpg';
import img6 from '../Assets/images/img6.jpg';


import img1 from '../Assets/images/what.png';


import '../Assets/styles/whatwedo.css';
import myVideo from '../Assets/videos/video1.mp4';

import { Link } from 'react-router-dom';

const Whatwedo = () => {
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
                  <li><a href="#">Cloud Transformation</a></li>
                  <li><a href="#">Data Analytics</a></li>
                  <li><a href="#">Managed Security Services</a></li>
                </ul>
              </div>
              <div className="row">
                <header>Digital Solution</header>
                <ul className="mega-links">
                  <li><a href="#">Scaled Operations</a></li>
                  <li><a href="#">SaaS and Enterprise Apps</a></li>
                  <li><a href="#">Next Gen Talent</a></li>
                  <li><a href="#">Digital Services</a></li>
                </ul>
              </div>
              <div className="row">
                <header>Platforms</header>
                <ul className="mega-links">
                  <li><a href="#">Cyber Proof</a></li>
                  <li><a href="#">SmartOps</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
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
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div className="row">
                <header>Email Services</header>
                <ul className="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              <div className="row">
                <header>Security services</header>
                <ul className="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
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
                  <li><a href="#">Visionary Viewpoints</a></li>
                
                </ul>
              </div>
              <div className="row">
                
                <ul className="mega-links">
                  <li><a href="#">Case Studies</a></li>
                
                </ul>
              </div>
              <div className="row">
                
                <ul className="mega-links">
                  <li><a href="#">Insights</a></li>
                </ul>
              </div>
              <div className="row">
              
                <ul className="mega-links">
                  <li><a href="#">WhitePapers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        
        <li style={{ marginRight: '20px' }}><a href="#">Careers</a></li>   
      </ul>
      <label htmlFor="menu-btn" className="btn menu-btn"><FontAwesomeIcon icon={faBars} /></label>
    </div>
  
  </nav>
 
  <div style={{ height: '90px' }}></div>

  <section class="box" style={{alignItems: 'center',
	padding: '110px 100px'}}>  
		<video autoPlay loop muted playsInline>
    <source src={myVideo} type="video/mp4" /> 
    </video>
		<h1>What We do</h1> 
		<h3>NyKinSky & Company</h3>
		<a href="#" class="boxBtn">Contact Us</a>   
	</section>


    {/* Middle Section 2 */}
<div id="main-section" className="landing-page-main mid-section sky-blue-background">
  <div className="left-aligned" style={{ paddingTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: '1', textAlign: 'center' }}>
        <div>
          <h1><b>Artificial Intelligence Services</b></h1>
          <hr />
          <br/>
          <p className='para'>
            With NykinSky & Company AI Solutions, you may revolutionize your business with carefully crafted solutions tailored to your unique needs. Our morally sound, diligent, and perceptive approach ensures confidentiality and unbiased models,
             trustworthy implementations, and concrete, accurate, and useful findings.</p>
          <br/>
        
          <p className='para'>
          With 28 years of experience in developing and delivering solutions that go beyond technology, NykinSky & Company is ideally positioned to offer premium, 
          custom solutions that are in line with each company's unique character.
          </p>
        </div>
      </div>
    </div>
  </div>
  <br/>
  </div>
  {/* Updated part to display cards horizontally */}
  <div className="flip-main">
      <div className="container">
        <h1 style={{paddingBottom:'20px'}}>Our Solution</h1>
        <div className="row">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={img1} alt="flip-card" />
              </div>
              <div className="flip-card-back">
                <div className="text">
                  <h3>Text Summarization</h3>
                  <p>Distill complex content into concise, insightful summaries</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={img1} alt="flip-card" />
              </div>
              <div className="flip-card-back">
                <div className="text">
                  <h3>Name and Entity Recognition</h3>
                  <p>Seamlessly identify and extract crucial information.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={img1} alt="flip-card" />
              </div>
              <div className="flip-card-back">
                <div className="text">
                  <h3>Text Classification</h3>
                  <p>Streamline information categorization for improved organization.</p>
                </div>
              </div>
            </div>
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
  )
}

export default Whatwedo
