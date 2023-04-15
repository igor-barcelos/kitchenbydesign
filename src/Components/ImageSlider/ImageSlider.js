
import image_1 from '../../Images/Components/ImageSlider/1.jpg';
import image_2 from '../../Images/Components/ImageSlider/2.jpg';
import { Link } from "react-router-dom";
import './ImageSlider.css'

const ImageSlider = () => {
     
    return(
    <section class = "slider-container"> 
      <div class ="slider-wrapper"> 
        <div class ="slider">
          <img src ={image_1} />
        </div>
        <div class="slider-text">
          <h2> 
              GRANITE & CABINETS INSTALLATION
          </h2>
          <p>
            Limited Lifetime Warranty | Free Estimates | State-Of-The-Art Equipment 
          </p>
          <h2>
            (601) 620 - 4077
          </h2>
          <button class="contactUs_button"> <Link to='/contact' style={{color:'white', textDecoration:'none'}}> CONTACT US</Link> </button>   
        </div>
        <div class ="slider-nar"> 
          <a href ="slide-1"> </a> 
          <a href ="slide-2"> </a>
          <a href ="slide-3"> </a>
        </div>
      </div>
    </section>
    )
};

export default ImageSlider