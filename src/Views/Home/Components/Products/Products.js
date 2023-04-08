
import image_1 from '../../../../Images/Components/Products/annie-spratt-osuiatBDTww-unsplash.jpg';
import image_2 from '../../../../Images/Components/Products/pexels-karolina-grabowska-4705933.jpg';
import image_3 from '../../../../Images/Components/Products/pexels-scott-webb-2824173.jpg';
import image_4 from '../../../../Images/Components/Products/How-sustainable-is-it-Granite-Marble-and-Concrete-750x375.jpg';
import './Products.css'
const Products = () => {
    return (
        <div class='product-wrapper'> 
            <div >
                <h1> 
                    LEARN ABOUT OUR PRODUCTS
                </h1>
            </div> 
             <div class ="products-container">
                <div class = 'product-container'>
                    <img src={image_1} /> 
                    <div class = "product-name"> 
                        <a href='#'> <p> GRANITE</p> </a>
                    </div>
                </div >
                <div class = 'product-container'>
                    <img src={image_2} /> 
                    <div class = "product-name"> 
                        <a href='#'> <p> MARBLE</p> </a>
                    </div>
                </div > 
                <div class = 'product-container'>
                    <img src={image_3} /> 
                    <div class = "product-name"> 
                    <a href='#'> <p> GRANITE</p> </a>
                    </div>
                </div> 
                <div class = 'product-container'>
                    <img src={image_4} /> 
                    <div class = "product-name"> 
                    <a href='#'> <p> QUARTZITE</p></a>
                    </div>
                </div>       
            </div>
            {/* <div >
                <button> HELLO</button>
            </div> */}
        </div>
       
    )
}

export default Products;