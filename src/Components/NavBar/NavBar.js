import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from  '../../Images/Logo/PNG/Logo Horizontal/3.png';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FaBars, FaTimes } from 'react-icons/fa';


const NavBar = () => {

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("mobile-menu");
    setMobileMenuOpen(!mobileMenuOpen);
  };

const closeMobileMenu = () => {
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".menu-hamburger");
  setMobileMenuOpen(false);
  
  navLinks.classList.remove("mobile-menu");
  menuIcon.classList.toggle("close");
  
  
};

    return(
    
      <nav class = "navbar">
        <img src={logo}  class= "logo-img"/> 
         
        <div class="nav-links"> 
                <ul>
                <li > <Link  to='/' onClick={closeMobileMenu} > Home </Link > </li> 
                <li > <Link  to='/about' onClick={closeMobileMenu} > About </Link > </li>
                <li > <Link  to='/products' onClick={closeMobileMenu}> Products </Link > </li>
                <li > <Link  to='/contact' onClick={closeMobileMenu}> Contact </Link > </li>
                <li > <Link  to='https://www.instagram.com/kitchen_by_design/?igshid=YmMyMTA2M2Y%3D' target="_blank" onClick={closeMobileMenu}> Gallery </Link > </li>
                </ul>
          </div >
          <div class ="nav-icons-container"> 
            <div class="nav-icons"> 
              <a href = 'https://www.facebook.com/KitchenByDesignII/' target="_blank"> <FontAwesomeIcon icon= {faFacebook} color="white"  className="socialMedia-icon"/> </a>
            </div>
            <div class="nav-icons"> 
              <a href = 'https://www.instagram.com/kitchen_by_design/?igshid=YmMyMTA2M2Y%3D' target="_blank"> < FontAwesomeIcon icon= {faInstagram} color="white"  className="socialMedia-icon" /> </a>
            </div> 
            <div class="nav-icons"> 
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
              <a href="https://wa.me/16017887740" target="_blank"><FontAwesomeIcon icon= {faWhatsapp} color="white"   className="socialMedia-icon"/></a>
            </div> 
          </div>
        <button class= "menu-hamburger" onClick={toggleMobileMenu} style={{border:'none', backgroundColor: mobileMenuOpen ? 'white':'black'}}> {mobileMenuOpen ? <FaTimes color = 'black' style={{backgroundColor:'white', borderColor:'white'}}/> : <FaBars color='white' />}  </button>
      </nav>
    );
};

export default NavBar;