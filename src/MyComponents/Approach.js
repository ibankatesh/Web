import React, { useState} from 'react';
import '../Assets/styles/header.css';
import '../Assets/styles/approach.css';
import logo from '../Assets/images/NyK.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import img5 from '../Assets/images/img5.jpg';
import img6 from '../Assets/images/img6.jpg';


import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Approach = () => {
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




  <Carousel class="header_App" >
                <Carousel.Item>
                    <div className="carousel-item-container">
                        <img style={{ height: '90vh' }} className="d-block w-100" src="" alt="" />
                        <div className="text-container">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>   
                        </div>
                       
                    </div>
                </Carousel.Item>


</Carousel>


<section class="section__container_App room__container_App">
      <p class="section__subheader_App">OUR APPROACH</p>
      <h6 class="section__header_App">Join us in reshaping the future of retail with AI-driven innovation and transformative solutions. Experience the power of NyKinSky Research & Analytics in driving growth, efficiency, and success for retailers worldwide.</h6>
      <div class="room__grid">
        <div class="room__card">
          <div class="room__card__image">
            <img src={img6} alt="room" />
          </div>
          <div class="room__card__details">
            <h4>Integrated AI/ML Solutions: </h4>
            <p>
            Leverage our comprehensive suite of AI/ML tools for seamless model development and deployment across a wide range of applications, including forecasting and inventory optimization.
            </p>
      
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={img6} alt="room" />
            </div>
          <div class="room__card__details">
            <h4>Customer Insights Acceleration: </h4>
            <p>
            Utilize our templated accelerators and frameworks to extract actionable insights from customer data, enabling informed decision-making and maximizing customer lifetime value.
            </p>
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={img6} alt="room" />
          </div>
          <div class="room__card__details">
            <h4>Simulation and Optimization: </h4>
            <p>
            Empower your business with the ability to simulate and optimize operations, effectively navigating supply chain disruptions and financial uncertainties.
            </p>
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={img6} alt="room" />
          </div>
          <div class="room__card__details">
            <h4> Precision Measurement:</h4>
            <p>
            Drive performance excellence through advanced measurement techniques such as market mix Modeling, multi-touch attribution, and rigorous testing methodologies. 
            </p>
          </div>
        </div>
      </div>
    </section>











  
 {/* Middle Section */}
 <div id="main-section" className="landing-page-main">
    <div className="left-aligned">
      <h5><b>OUR APPROACH</b></h5>
      
      <p>1. Integrated AI/ML Solutions: Leverage our comprehensive suite of AI/ML tools for seamless model development and deployment across a wide range of applications, including forecasting and inventory optimization. </p>
      <p>
      2. Customer Insights Acceleration: Utilize our templated accelerators and frameworks to extract actionable insights from customer data, enabling informed decision-making and maximizing customer lifetime value. 

3. Simulation and Optimization: Empower your business with the ability to simulate and optimize operations, effectively navigating supply chain disruptions and financial uncertainties. 

4. Precision Measurement: Drive performance excellence through advanced measurement techniques such as market mix Modeling, multi-touch attribution, and rigorous testing methodologies. 
      </p>

      <p><b> 

Join us in reshaping the future of retail with AI-driven innovation and transformative solutions. Experience the power of NyKinSky Research & Analytics in driving growth, efficiency, and success for retailers worldwide. </b></p>
    </div>
        
</div>
      




   {/* Footer Section */}
  
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

export default Approach
