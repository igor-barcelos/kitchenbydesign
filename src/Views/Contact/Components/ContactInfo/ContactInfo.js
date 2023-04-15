import './ContactInfo.css'
const ContactInfo = () => {
    return(
        <div class = 'contact-wrapper'>
            {/* <div class ='maps-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4052.173652117166!2d-89.32738002695089!3d31.34633010180683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889cdea983f8216d%3A0x68d4e0909e0f61d8!2s5087%20Hwy%2042%2C%20Hattiesburg%2C%20MS%2039401%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1681121115367!5m2!1sfr!2sfr" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
            </div> */}
            <div class = 'contactInfo-container'>
                <h1> KITCHEN BY DESIGN </h1> 
                <p> GRANITE & CABINETS INSTALLATION </p>
                <h2> LOCATION </h2> 
                <p> 5087 Old Hwy 42 Hattiesburg<br/>
                Mississippi, 39401 
                </p>
                
                <a href='https://goo.gl/maps/kZqpxJNoV621uTQw9'> Get Directions </a>

                <h1> CONTACT</h1> 
                <p >  Tel : (601) 620 - 4077 <br/> 
                        kitchenbydesignII@gmail.com
                </p>

                <h2> HOURS </h2> 
                <p >  Mon - Fri 8:00 am - 5:00 pm <br/> 
                        Sat - Closed <br/>
                        Sun - Closed
                </p>
            </div>
        </div>
    )
}

export default ContactInfo;