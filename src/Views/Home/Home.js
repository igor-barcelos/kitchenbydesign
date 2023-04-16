import './Home.css'
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import WhatsAppButton from '../../Components/WhatsAppButton/WhatsAppButton';
import Products from './Components/Products/Products'
import AboutUs from './Components/AboutUs/AboutUs';
import BottomBar from '../../Components/BottomBar/BottomBar';
import { useEffect } from "react";
const Home = () => {
return(
    <div class = "container" >
            <ImageSlider/> 
            <AboutUs/> 
            <Products/>
            <BottomBar/>
            <WhatsAppButton/> 
    </div>
);
};

export default Home;