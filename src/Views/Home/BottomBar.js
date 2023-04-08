
import './BottomBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const BottomBar = () => {

    return(
    <div class = "bottomBarContainer">
        <div class = "itemsContainer"> 
        <FontAwesomeIcon icon={faClock} color='white' size='2x' style = {{marginTop:'10px'}}/>  
            <div> 
                <p class="informationTitle"> Location </p>
            </div>
            <div>
                <p class = "informationContent"> 
                5087 Old Hwy 42 Hattiesburg<br/>
                Mississippi, 39401 
                </p> 
            </div>
        </div>

        <div class = "itemsContainer">
            <FontAwesomeIcon icon={faLocationDot} color='white' size='2x' style = {{marginTop:'10px'}}/>  
            <div> 
                <p class="informationTitle"> Hours </p>
            </div>
            <div class = "informationContent ">
                <p >  Mon - Fri 8:00 am - 5:00 pm <br/> 
                        Sat - Closed <br/>
                        Sun - Closed
                </p>
            </div>
        </div>
        <div class = "itemsContainer"> 
        <FontAwesomeIcon icon={faEnvelope} color='white' size='2x' style = {{marginTop:'10px'}}/>  
            <div> 
                <p class="informationTitle"> Contact </p>
            </div>
            <div class = "informationContent ">
                <p >  Mail : (601) 620 - 4077 <br/> 
                        // companie email // 
                </p>
            </div>
        </div>

    </div>
  
    );
};

export default BottomBar;