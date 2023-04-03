import React from 'react';
import { 
    Toolbar,
    IconButton,
    Typography,
    Button,
    Box,
    AppBar, 
    Grid,
    Stack} from '@mui/material';

import logo from '../../Images/Logo/PNG/Logo Horizontal/2.png';
import './TopBar.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import NavBar from '../NavBar/NavBar';
const TopBar = () => {
	return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ background: 'white' }}>
        <Grid container spacing={1}> 
            <Grid item xs = {6} style = {{display:'flex',justifyContent:'left',alignItems:'left'}}>
                <img   className="logo" src={logo} alt="React Image"/>
            </Grid>
            
            
            
                {/* <Grid item xs = {6} >
                    <LocationOnIcon  sx={{ color:"black"}}/>
                    <InstagramIcon  sx={{ color:"black"}}/>
                    <FacebookIcon  sx={{ color:"black"}}/>
                </Grid> */}
        </Grid>
    </AppBar>
    </Box>
	);
};

export default TopBar;
