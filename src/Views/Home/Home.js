import './Home.css'
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import WhatsAppButton from '../../Components/WhatsAppButton/WhatsAppButton';
import Products from './Components/Products/Products'
import AboutUs from '../AboutUs/AboutUs';
import BottomBar from '../../Components/BottomBar/BottomBar';
const Home = () => {
    return(
        <div class = "container" >
                <ImageSlider/> 
                {/* <AboutUs/> 
                <Products/> */}
                <BottomBar/>
                <WhatsAppButton/> 
            {/* <div class ="products_div">
                <div class = "products_content">  
                <h1 class="Products"> Our Products </h1>
                    <p class ="ProductsInformation"> 
                    We specialize in providing premium marble products to homeowners and contractors alike. Our wide selection of marble includes a range of colors and patterns to suit any style or taste.
                    Not only is our marble stunningly beautiful, but it's also durable and long-lasting. With proper care, it can withstand years of wear and tear while maintaining its natural shine and elegance.
                    Our team of experts is dedicated to helping you find the perfect marble products for your specific needs. Whether you're looking to create a statement piece with a unique pattern or want to keep it classic with a timeless white marble, we have the selection and expertise to make your vision a reality.
                    </p> 
                </div>
                <div class = "products_content">
                    <img   className="ProductImage" src={ ProductImage } alt="React Image"/>
                </div>  
            </div>
            <div className='ImageContainer'>
                <img   className="ImageKitchen" src={ProjectImage} alt="React Image"/> 
                <div className='contactUs_div'> 
                    <h1> Contact Us</h1> 
                    <p class ="contactInformation"> 
                    Nossa equipe está pronta para te atender. Fale conosco utilizando um dos contatos abaixo ou utilize nosso formulário para enviar os detalhes do seu projeto e receber seu orçamento.
                    </p>
                    <a href = "#"><button class ="callUs_button"> Solicitar Orçamento</button></a>  
                </div>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"/>
                <div className='whatsapp_div'> 
                    <div class="WhatsappIcon_div"> 
                    <span class="fa-stack">
                        <i class="fa fa-circle fa-stack-1x icon-c"></i>
                        <i class="fab fa-whatsapp fa-stack-2x icon-d"></i>         
                    </span>
                    </div>
                    <div class="Whatsapptext_div "> 
                        <span> 601-620-4077 </span>
                    </div>
                </div>
                <div className='mail_div'> 
                    <div class="MailIcon_div"> 
                        <span class="fa-stack">
                            <i class="fa fa-circle fa-stack-1x icon-c"></i>
                            <i class="fa fa-envelope fa-stack-2x icon-d "></i>    
                        </span>
                    </div>
                    <div class="Mailtext_div "> 
                        <span> /.</span>
                    </div>
                </div>
            </div>
            <BottomBar/>  */}
        </div>
    );
};

export default Home;