import ImageSlider from '../../../../Components/ImageSlider/ImageSlider';
import WhatsAppButton from '../../../../Components/WhatsAppButton/WhatsAppButton';
import BottomBar from "../../../../Components/BottomBar/BottomBar"
import './AboutUs.css'
const AboutUs  = () => {
    return(
        <div class = "aboutUs-container">
             {/* <ImageSlider/> */}
           <div class = "aboutUs-title"> 
                <h1 id='about'> 
                    Who we are ?
                </h1>
           </div>
           <div class = "aboutUs-content">
            <p>
                We specialize in providing premium marble products to homeowners and contractors alike. Our wide selection of marble includes a range of colors and patterns to suit any style or taste.
                Not only is our marble stunningly beautiful, but it's also durable and long-lasting. With proper care, it can withstand years of wear and tear while maintaining its natural shine and elegance.
                Our team of experts is dedicated to helping you find the perfect marble products for your specific needs. Whether you're looking to create a statement piece with a unique pattern or want to keep it classic with a timeless white marble, we have the selection and expertise to make your vision a reality.
            </p>
            {/* <div class = "aboutUs-information" style={{display:'inline-block', textAlign:'center', width:'100%', textJustify:'left'}}>
                <div style={{display:'flex', justifyContent:'space-between'}}> 
                    <div> 
                    <h2>  Business Hours </h2>
                        <p >  Mon - Fri 8:00 am - 5:00 pm <br/> 
                            Sat - Closed <br/>
                            Sun - Closed
                        </p>
                    </div>

                    <div> 
                        <h2>  Products </h2>
                        <p> Cabinets   <br/>
                        Commercial Granite Countertop <br/> 
                        Kitchen Countertop <br/> 
                        Bathroom Countertop <br/> 
                        </p>
                    </div>
                    <div> 
                        <h2>  Payment Types </h2>
                        <p> American Express   <br/>
                        Cash <br/> 
                        Check<br/> 
                        MasterCard <br/> 
                        Visa
                        </p>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}> 
                    <div style={{width:'100%'}}> 
                    <h2>  Language </h2>
                        <p >  English <br/> 
                             Portuguese <br/>
                        </p>
                    </div>

                    <div style={{width:'100%', justifyItems:'center'}}> 
                        <h2>  Specialties </h2>
                        <p> Kitchen Countertop <br/> 
                        Bathroom Countertop <br/> 
                        </p>
                    </div>
                    <div style={{width:'100%'}}> 
                        <h2>  Payment Types </h2>
                        <p> American Express   <br/>
                        Cash <br/> 
                        Check<br/> 
                        MasterCard <br/> 
                        Visa
                        </p>
                    </div>
                </div>
            </div> */}
           </div>  
           {/* <WhatsAppButton/> 
           <BottomBar/> */}
        </div>
    )
}

export default AboutUs;