import BottomBar from "../../Components/BottomBar/BottomBar"
import { useEffect } from "react";
import WhatsAppButton from '../../Components/WhatsAppButton/WhatsAppButton';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import './About.css'
const About = () => {

useEffect(() => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const aboutSection = document.getElementById('about');
    const aboutSectionTop = aboutSection.offsetTop - navbarHeight;
    
    window.scrollTo({
        top: aboutSectionTop,
        behavior: 'smooth'
    });
    }, []);


    return(
        <div class ='about-wrapper'>
            <ImageSlider/>
            <section id="about">  
                <div class ='about-container' >
                <h1> About Us </h1>
                <div> 
                    <h2> Businnes Hours</h2>
                        <p >  Mon - Fri 8:00 am - 5:00 pm <br/> 
                            Sat - Closed <br/>
                            Sun - Closed
                        </p>
                    <h2> Payment Types</h2>
                        <p >  American Express <br/> 
                            Cash <br/>
                            Check <br/>
                            Visa <br/>
                            MasterCard <br/>
                        </p>
                    <h2> Products</h2> 
                        <p > Residential Granite and Stone Countertop <br/> 
                            Cabinets <br/>
                            Kitchen Countertop <br/>
                            Bathroom Countertop <br/>          
                        </p>
                    <h2> Specialties</h2>   
                        <p > Bathroom Countertops <br/> 
                            Kitchen Countertops <br/>          
                        </p>                 
                </div> 
            </div>
            </section>
            
            <WhatsAppButton/> 
            <BottomBar/>
        </div> 
    )
}

export default About;