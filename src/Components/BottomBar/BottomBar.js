import React, { useState, useEffect} from 'react';
import './BottomBar.css';

const BottomBar = () => {

    return(
    <div class = "bottomBarContainer">
        <div class = "itemsContainer"> 
            <div> 
                <p class="informationTitle"> Location </p>
            </div>
            <div>
                <p class = "informationContent"> 
                83 Avenue d'Italie <br/>
                Paris, FR 
                </p> 
            </div>
        </div>

        <div class = "itemsContainer"> 
            <div> 
                <p class="informationTitle"> Hours </p>
            </div>
            <div class = "informationContent ">
                <p >  Mon - Fri 8:00 am - 5:00 pm <br/> 
                        Sat - Closed
                </p>
            </div>
        </div>
        <div class = "itemsContainer"> 
            <div> 
                <p class="informationTitle"> Contact </p>
            </div>
            <div class = "informationContent ">
                <p >  Mail : igor.barcelosenge@gmail.com <br/> 
                        Tel : +33 06 51 72 29 26 
                </p>
            </div>
        </div>

    </div>
  
    );
};

export default BottomBar;