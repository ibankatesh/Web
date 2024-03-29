import React, { useState, useEffect} from 'react';
import logo from '../Assets/images/NyK.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons



import slider2 from '../Assets/images/services_1.jpg.jpg';



import img6 from '../Assets/images/img6.jpg';


import '../Assets/styles/index.css';
import '../Assets/styles/carousel.css';
import '../Assets/styles/footer.css';
import '../Assets/styles/header.css';
import '../Assets/styles/MidSection.css';

import { Link } from 'react-router-dom';


function ServiceExperience() {
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

    const handleLinkClick = () => {
      // Reload the page before navigating
      window.location.reload();
  };
    

    
    return (
        <div>
        
        <nav className='nav1 navbar-scrolled' style={{ visibility: visible ? 'visible' : 'hidden', backgroundColor:'#312f36',position: 'fixed', width: '100%', zIndex: '1000' }}>
      <div className="wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="NyKinSky Logo" className="logo-image" style={{ width: '80px', height: 'auto', paddingTop: '10px', cursor: 'pointer' }} />
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><FontAwesomeIcon icon={faTimes} /></label>


  
        
        <li style={{ marginRight: '20px'}}>
        <Link to="/Services-AI">Services</Link>
          <input type="checkbox" id="showMega" />
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src={img6} alt="" />
              </div>
              <div className="row">
                
                <ul className="mega-links">
                  <li><Link to="/Services-AI">Aritifical Intelligence(AI)</Link></li>
                  <li><Link to="/Cloud-Transformation">Cloud Transformation</Link></li>
                  <li><Link to="/Data-Engineering">Data Engineering</Link></li>
                  <li><Link to="/Generative-AI">Generative AI</Link></li>
                </ul>
              </div>
              <div className="row">
                
                <ul className="mega-links">
                  <li><Link to="/Experience-Consulting">Experience Consulting</Link></li>
                  <li><Link to="/Application-Engineering">Application Engineering</Link></li>
                  <li><Link to="/Business-Intelligence">Business Intelligence</Link></li>
                  <li><Link to="/MLOps">MLOps</Link></li>
                </ul>
              </div>
              <div className="row">
               
                <ul className="mega-links">
                  <li><Link to="/Data-Science">Data Science</Link></li>
                  <li><Link to="/AI-Engineering">AI Engineering</Link></li>
                  <li><Link to="/ML-Products & Platforms">ML Products & Platforms</Link></li>
  
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
                  <li><Link to="/indsutries">Retail</Link></li>
                  <li><Link to="/industries-cpg">CPG</Link></li>
                  <li><Link to="/industries-bfs">BFS</Link></li>
                  <li><Link to="/industries-insurance">Insurance</Link></li>
                  <li><Link to="/industries-Manufacturing">Manufacturing</Link></li>
                </ul>
              </div>
              <div className="row">  
                <ul className="mega-links">
                 
                  <li><Link to="/industries-Transportation-Logistics">Transportation & logistics</Link></li>
                  <li><Link to="/industries-Life-Science">Life Sciences</Link></li>
                  <li><Link to="/industries-Healthcare">HealthCare</Link></li>
                  <li><Link to="/industries-tech-telecom-media">Technology, Telecom & Media  </Link></li>
                </ul>
              </div>
              <div className="row">
                <ul className="mega-links">
                  <li><Link to="#"></Link></li>
                  <li><Link to="#"></Link></li>
                  <li><Link to="#"></Link></li>
                  <li><Link to="#"></Link></li>
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


  <div className="slider">
            {/* list Items */}
            <div className="list">
                {/* Slider items */}
                <div className="item active">
                    <img src={slider2} alt="Slider" />
                    {/*<div className="content">
                        <p>design</p>
                        <h2>Slider 01</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                        </p>
    </div>*/}
                </div>
                
             
                
               
            </div>
           
           
        </div>






         {/* Middle Section 2 */}
<div id="main-section" className="landing-page-main mid-section sky-blue-background">
  <div className="left-aligned" style={{ paddingTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: '1', textAlign: 'center' }}>
        <div>
          <h1><b>  
                Experience Consulting</b></h1>
          <hr />
          <br/>
          <p className='para'>
          Transform ideas into experiences.</p>
          <br/>
        
          <p className='para'>
          Meaningful user experiences (UX) require industry-specific designs, from interactive prototypes to data visualizations. Here's where data-driven tactics and user-centric design come into play, allowing businesses to develop engaging digital experiences.

NyKinSky's Analytics' Experience Consulting uses creativity, knowledge, and information to solve a problem statement or bring your ideas to life. Together, our team of researchers, designers, developers, and visual artists brings distinct viewpoints and a range of skills to allow end-to-end, sector-specific design experiences for each of your important business personas.

          </p>
        </div>
      </div>
    </div>
  </div>
  <br/>
  </div>

  <div>
        <div className="left-aligned"  style={{textAlign:'center',paddingTop:'80px'}}>
      <h3 style={{textAlign:'center'}}><b>WHAT WE DO</b></h3>
      <p>We employ user research, prototyping, and in-depth study of your present design system to produce creative, functional designs that yield outcomes.
      </p>
    </div>
        <div>
            
            <div id="formList">
                
                <div id="list">
                    <div className="item1">
                        
                        <div className="content">
                            <table width="100%" cellSpacing="0"> 
                                <tr>
                                    <td colSpan="2" className="nameGroup" style={{color:'red'}}><b>Visual storytelling</b></td>   
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup"  >
                                    Our proficiency in visual storytelling facilitates decision-making with intricate data and helps you uncover insights. 
                                    Our specialty is providing clear, succinct material that conveys ideas clearly.</td>   
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        
                        <div className="content">
                            <table width="100%" cellSpacing="0"> 
                                <tr>
                                    <td colSpan="2" className="nameGroup" style={{color:'red'}}><b>User experience</b></td>   
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup"  >
                                    Improve user experiences by mapping the path users take to interact with the product, developing interactive prototypes, 
                                    and gaining insights about user behavior.</td>   
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        
                        <div className="content">
                            <table width="100%" cellSpacing="0"> 
                                <tr>
                                    <td colSpan="2" className="nameGroup" style={{color:'red'}}><b>Responsive web applications</b></td>   
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup"  >
                                    Our goal is to create cutting-edge experiences that are delightful, engaging, and usable for the contemporary world of digital gadgets.</td>   
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        
                        <div className="content">
                            <table width="100%" cellSpacing="0"> 
                                <tr>
                                    <td colSpan="2" className="nameGroup" style={{color:'red'}}><b>Growth Strategies</b></td>   
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup"  >
                                    Improve product conversion rates and grow user bases by coming up with and putting into practice tactics that will increase conversions and encourage more users.
                                    </td>   
                                </tr>
                            </table>
                        </div>
                    </div>
                   
                  
                </div>
            </div>
        
          
        </div>
        </div>

     

   
   


            {/* Footer Section */}
            <footer class="footer" >
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
        <div class="footer-col"  onClick={handleLinkClick}  >
          <h4>about us</h4>
          <ul>
            <li><Link to="/about-us" >Who we are</Link></li>
            <li><Link to="/about-us">Our Journey & Story </Link></li>
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
              <Link to="" ><FontAwesomeIcon icon={faFacebookF} /></Link>
              <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
              <Link to="https://www.instagram.com/nykinsky/" target='blank'><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link to="https://www.linkedin.com/company/nykinsky/mycompany/" target='blank'><FontAwesomeIcon icon={faLinkedinIn} /></Link>
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

export default ServiceExperience;