import React, { useState, useEffect, useRef } from 'react';
import logo from '../Assets/images/NyK.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assets/images/img1.jpg';
import img2 from '../Assets/images/img2.jpg';
import img9 from '../Assets/images/img9.jpg';
import img3 from '../Assets/images/img3.jpg';
import img4 from '../Assets/images/img4.jpg';
import img5 from '../Assets/images/img5.jpg';
import img6 from '../Assets/images/img6.jpg';
import img7 from '../Assets/images/img7.jpg';
import img8 from '../Assets/images/img8.jpg';

import '../Assets/styles/carousel.css';
import '../Assets/styles/footer.css';
import '../Assets/styles/header.css';
import '../Assets/styles/MidSection.css';

import { Link } from 'react-router-dom';

function Home() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [searchVisible, setSearchVisible] = useState(false); // State to manage the visibility of the search box
    const [index, setIndex] = useState(0); // State for Carousel active index
    const [processingLinePosition, setProcessingLinePosition] = useState(0); // State for processing line position
    const carouselRef = useRef(null); // Ref for accessing the Carousel component


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = currentScrollPos < prevScrollPos || currentScrollPos < 10;
            const carouselWidth = carouselRef.current.offsetWidth;
            const scrollPos = window.scrollY;
            const processingLinePos = (scrollPos / carouselWidth) * 100;
            setProcessingLinePosition(processingLinePos);
            setVisible(isVisible);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);


     // Function to handle carousel index change
     const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
  };


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



            <Carousel>
      <Carousel.Item>
        <div className="carousel-item-container">
          <img className="d-block w-100" src={img1} alt="" />
          <div className="text-container">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="learn-more-btn" id="learn-more-btn-1">
              <span>Learn More</span>
            </button>
          </div>
          <div className="processing-line"></div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-item-container">
          <img className="d-block w-100" src={img2} alt="" />
          <div className="text-container">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="learn-more-btn" id="learn-more-btn-2">
              <span>Learn More</span>
            </button>
          </div>
          <div className="processing-line"></div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-item-container">
          <img className="d-block w-100" src={img9} alt="" />
          <div className="text-container">
            <h3>Third slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="learn-more-btn" id="learn-more-btn-3">
              <span>Learn More</span>
            </button>
          </div>
          <div className="processing-line"></div>
        </div>
      </Carousel.Item>
    </Carousel>


            {/* Middle Section */}
             <div id="main-section" className="landing-page-main">
    <div className="left-aligned" style={{paddingRight: '400px'}}>
      <h3><b>WHAT WE DO</b></h3>
      <p>Real transformation demands hard work, persistence, and the right tools for the job. 
        <br/>For over 20 years, we've redefined craftsmanship and shared our expertise to help our clients succeed.</p>
    </div>
    
    <div className="landing-page-cards-container">
      <div className="place-card-container">
        <div className="image-container">
          <img
            alt="London"
            src={img4}
            className="place-card-image"
          />
          <button className="learn-more-btn">
            Learn More <span>&rarr;</span>
          </button>
        </div>
        <div className="place-card-container1">
          <span className="place-card-text"><span>Digital Solution</span></span>
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
            src={img5}
            className="place-card-image"
          />
          <button className="learn-more-btn">
            Learn More <span>&rarr;</span>
          </button>
        </div>
        <div className="place-card-container1">
          <span className="place-card-text"><span>Product Engineering</span></span>
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
            src={img6}
            className="place-card-image"
          />
          <button className="learn-more-btn">
            Learn More <span>&rarr;</span>
          </button>
        </div>
        <div className="place-card-container1">
          <span className="place-card-text"><span>Platforms</span></span>
          <span className="place-card-text1">
            <span>
              We deliver swift, sustainable solutions, so you can empower your people, improve your processes and transform your technology in a safe, secure environment.
            </span>
          </span>
        </div>
      </div>
    </div>
<hr></hr>

  </div>

            {/* Mid Section */}
            <div id="main-section" className="landing-page-main mid-section">
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
    );
}

export default Home;
