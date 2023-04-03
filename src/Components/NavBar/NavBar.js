import React, { useState, useEffect} from 'react';
import { 
    Toolbar,
    IconButton,
    Typography,
    Button,
    Box,
    AppBar,
    Grid,
    Tabs,
    Tab} from '@mui/material';

import { Link } from "react-router-dom";
import './NavBar.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HamburgerIcon from '../../Images/Icons/menu-btn.png';
import logo from  '../../Images/Logo/PNG/Logo Horizontal/3.png';
const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

    return(
    
      <nav class = "navbar">
        <img src={logo}  class= "logo-img"/>  
        <div class="nav-links" > 
          <ul>
            <li class="active"> <a href='#'> Home </a> </li>
            <li> <a href='#'> About </a> </li>
            <li> <a href='#'> Products </a> </li>
            <li> <a href='#'> Gallery </a> </li>
          </ul>
          </div >
        <a href = "#"><button class ="button"> Contact Us</button></a>  
        <img src={HamburgerIcon}  class= "menu-hamburger"/> 
      </nav>

    //   <div> 
    //     <nav>
    //     {(toggleMenu || screenWidth > 500) && (
    //     <ul className="list">
    //     <li> 
    //       <Link to="/" className='items'> <a> Home </a> </Link>
    //     </li>
    //     <li> 
    //       <Link  className='items'> <a> About </a> </Link>
    //     </li>
    //     <li> 
    //       <Link  className='items'> <a> Products </a> </Link>
    //     </li>
    //     <li> 
    //       <Link  className='items'> <a> Contact </a> </Link>
    //     </li>
    //   </ul>
    //     )}
    //     <FontAwesomeIcon icon= {faBars} color="white" className='menuIcon'/> 
    //   </nav>
    // </div>

    //     <AppBar position="static" style={{ background: 'white' }}>
    //     <Toolbar>
    //       <Grid container spacing={1}justifyContent="center" alignItems="center">
    //         <Grid item xs = {4} style = {{display:'flex',justifyContent:'left',alignItems:'left'}}>
    //               <img   className="logo" src={logo} alt="React Image"/>
    //         </Grid>
    //         <Grid item xs ={4 } style = {{display:'flex',justifyContent:'center',alignItems:'center'}}> 
    //        <Tabs value={value} onChange={onChange} textColor="secondary">
    //         <Tab label="Home" component={Link} to="/"  style={{color: 'black'}}/>
    //         <Tab label="About" component={Link} to="/about"  style={{color: 'black'}} />
    //         <Tab label="Products" component={Link} to="/about"  style={{color: 'black'}} />
    //         <Tab label="Contact" component={Link} to="/about"   style={{color: 'black'}} />
    //     </Tabs>
    //         </Grid>
    //         <Grid item xs = {4} style = {{display : 'flex' , justifyContent: 'flex-end' }}> 
    //                 <PhoneIcon fontSize="large" sx={{ color:"black"}} /> 
    //                 <Typography color={'black'}> +33 06 51 72 29 26 </Typography>
    //                 {/* <LocationOnIcon  fontSize="large" sx={{ color:"black"}}/>
    //                 <InstagramIcon  fontSize="large" sx={{ color:"black"}}/>
    //                 <FacebookIcon  fontSize="large" sx={{ color:"black"}}/> */}
    //         </Grid>      
    //     </Grid>
    //   </Toolbar>
    // </AppBar>
    );
};

export default NavBar;