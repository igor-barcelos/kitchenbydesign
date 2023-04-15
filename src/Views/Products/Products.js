import BottomBar from "../../Components/BottomBar/BottomBar"
import image_1 from '../../Images/Components/ImageSlider/3.jpg';
import WhatsAppButton from '../../Components/WhatsAppButton/WhatsAppButton';
import './Products.css'
const Products = () => {
    return(
        <div class ='products-wrapper'>
             <div class ="top-img-div"> 
                <img src ={image_1} />

                <div class="top-text-div">
                        <h2> 
                            GRANITE & CABINETS INSTALLATION
                        </h2>
                        <p style={{lineHeight:'1.5'}}>
                            Experience the beauty and durability of our granite countertops <br/>
                            The perfect addition to any home!
                        </p>
                        <h2>
                            (601) 620 - 4077
                        </h2>
                        {/* <button class="contactUs_button"> CONTACT US </button>    */}
                        </div>
            </div>
            <div class ='productsView-container'>
                <h1> Granite Countertops</h1>
                <p> Kitchen By Design, your go-to source for stunning granite countertops for your home! We specialize in providing high-quality granite countertops for kitchens, bathrooms, and more. Granite is not only incredibly durable and resistant to scratches and heat, but it also adds a touch of elegance and sophistication to any room. Our team of experts will work with you to create a custom design that perfectly fits your style and budget. Upgrade your home today with Kitchen By Design's granite countertops!</p>
                <h1> Our Stones </h1>
                    <ul>
                        <li>Quartzite</li>
                        <li>Limestone</li>
                        <li>Marble</li>
                        <li>Onyx</li>
                        <li>Soapstone</li>
                        <li>Travertine</li>
                        <li>Slate</li>
                        <li>Custom Work</li>
                </ul>
                <h1 > Durability</h1>
                <p> When it comes to kitchen and bathroom countertops, durability is key. That's why at Kitchen By Design, we specialize in providing high-quality granite countertops that are built to last. Granite is an incredibly durable material that can withstand daily wear and tear, heat, and even scratches. In fact, it's one of the toughest materials out there. Plus, with our expert installation and maintenance services, you can be sure that your granite countertops will look as good as new for years to come. Upgrade your home with the unbeatable durability of granite countertops from Kitchen By Design!</p>
            </div>
            <BottomBar/>
            <WhatsAppButton/> 
        </div> 
    )
}

export default Products;