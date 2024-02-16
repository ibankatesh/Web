import React, { useState, useEffect } from 'react';
import '../Assets/styles/header.css';
import logo from '../Assets/images/NyK.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import img5 from '../Assets/images/img5.jpg';
import img6 from '../Assets/images/img6.jpg';

import partners from '../Assets/images/partners.jpg';
import aws from '../Assets/images/aws-partners.jpg';
import azure from '../Assets/images/azure.png';

import googlecloud from '../Assets/images/googlecloud.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
const Partners = () => {
  const [visible, setVisible] = useState(true);
  const [searchVisible, setSearchVisible] = useState(false); 
  

  const handleLogoClick = () => {
    // Redirect to the home page
    window.location.href = '/';
};

const handleSearchClick = () => {
    // Toggle the visibility of the search box
    setSearchVisible(!searchVisible);
};
  return (
    <div>
        <nav style={{ paddingTop: '30px', visibility: visible ? 'visible' : 'hidden', backgroundColor: 'transparent', position: 'fixed', width: '100%', zIndex: '1000' }}>
      <div className="wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="NyKinSky Logo" style={{ width: '80px', paddingTop: '10px', height: 'auto', cursor: 'pointer' }} />
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
        
          {/* Search box adjacent to the search icon */}
          <li style={{ position: 'relative' }}>
            <FontAwesomeIcon icon={faSearch} onClick={handleSearchClick} style={{ cursor: 'pointer' }} />
            {searchVisible && (
              <div className="search-box" style={{ position: 'absolute', top: '100%', left: 0, display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                {/* Your search box input and submit button */}
                <input type="text" placeholder="Search..." style={{ marginRight: '10px' }} />
                <button type="submit">Submit</button>
              </div>
            )}
          </li>
      </ul>
      <label htmlFor="menu-btn" className="btn menu-btn"><FontAwesomeIcon icon={faBars} /></label>
      
    </div>
    
    <hr/>
  </nav>



  <Carousel >
                <Carousel.Item>
                    <div className="carousel-item-container">
                        <img style={{ height: '90vh' }} className="d-block w-100" src={partners} alt="" />
                        <div className="text-container">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>   
                        </div>
                        <div className="processing-line" id="processing-line-1"></div> {/* Processing line */}
                    </div>
                </Carousel.Item>


</Carousel>


<div id="main-section2" className="landing-page-main mid-section sky-red-background">
        <div className="left-aligned" style={{ paddingLeft: '20px', paddingTop: '50px' }}>
          <h6 style={{ marginBottom: '10px', textAlign: 'center'}}><b> NyKinSky Partners</b></h6>
          <h2 style={{ margin: '0' ,paddingBottom:'30px'}}><b>Strategic alliance partners</b></h2>
    
        </div>
        <div className="landing-page-cards-container">
          <div className="place-card-container">
            <div className="image-container">
              <img
                alt="London"
                src={aws}
                className="place-card-image"
              />

            </div>
            <div className="place-card-container1">
              <span className="place-card-text"><span>AWS</span></span>
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
                src={azure}
                className="place-card-image"
              />

            </div>
            <div className="place-card-container1">
              <span className="place-card-text"><span>Azure</span></span>
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
                src={googlecloud}
                className="place-card-image"
              />

            </div>
            <div className="place-card-container1">
              <span className="place-card-text"><span>Google Cloud</span></span>
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
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>about us</h4>
          <ul>
            <li><a href="#">Who we are</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Social Commitment</a></li>
            <li><a href="#">Ledership team</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Careers</h4>
          <ul>
            <li><a href="#">Explore opportunities</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
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

export default Partners
