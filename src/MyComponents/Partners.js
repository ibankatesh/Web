import React, { useState,useEffect} from 'react';
import '../Assets/styles/header.css';
import logo from '../Assets/images/NyK.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import img5 from '../Assets/images/img5.jpg';
import img6 from '../Assets/images/img6.jpg';
import cr1 from '../Assets/images/cr1.jpg';
import cr2 from '../Assets/images/cr2.jpg';

import aws from '../Assets/images/aws-partners.jpg';
import azure from '../Assets/images/azure.png';

import googlecloud from '../Assets/images/googlecloud.jpg';

import { Link } from 'react-router-dom';
const Partners = () => {
  
  const [visible] = useState(true);
  

  const handleLogoClick = () => {
    // Redirect to the home page
    window.location.href = '/';
};


const handleLogoClick1 = () => {
  // Redirect to the home page
  window.location.href = '/about-us';
};


useEffect(() => {
  const nextDom = document.getElementById('next');
  const prevDom = document.getElementById('prev');
  const carouselDom = document.querySelector('.carousel');
  const sliderDom = carouselDom.querySelector('.carousel .list');
  const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');

  thumbnailBorderDom.appendChild(thumbnailBorderDom.querySelector('.item'));

  let timeAutoNext = 7000;
  let runNextAuto = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);

  nextDom.onclick = function() {
    showSlider('next');
  };

  prevDom.onclick = function() {
    showSlider('prev');
  };

  let runTimeOut;
  function showSlider(type) {
    let sliderItems = sliderDom.querySelectorAll('.item');
    let thumbnailItems = thumbnailBorderDom.querySelectorAll('.item');

    if (type === 'next') {
      sliderDom.appendChild(sliderItems[0]);
      thumbnailBorderDom.appendChild(thumbnailItems[0]);
      carouselDom.classList.add('next');
    } else {
      sliderDom.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailBorderDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove('next');
      carouselDom.classList.remove('prev');
    }, 300);
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);
  }
}, []);  // Empty dependency array to run this effect only once



  return (
    <div>
        <nav className='nav1 navbar-scrolled'  style={{ visibility: visible ? 'visible' : 'hidden', backgroundColor:'#312f36',position: 'fixed', width: '100%', zIndex: '1000' }}>
      <div className="wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="NyKinSky Logo" className="logo" style={{ width: '80px', height: 'auto', paddingTop: '10px', cursor: 'pointer' }} />
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



  <div className="carousel">
      <div className="list">
        <div className="item">
          <img src={cr1} alt="1" />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              {/* Lorem ipsum text */}
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={cr2} alt="2" />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              {/* Lorem ipsum text */}
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={cr1} alt="3" />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              {/* Lorem ipsum text */}
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={cr2} alt="4" />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              {/* Lorem ipsum text */}
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <div className="item active">
          <img src={cr1} alt="Thumbnail 1" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={cr2} alt="Thumbnail 2" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={cr2} alt="Thumbnail 3" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={cr2} alt="Thumbnail 4" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
      </div>
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>
      <div className="time"></div>
    </div>







 


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

export default Partners
