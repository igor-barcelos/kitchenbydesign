
import ContactInfo from "./Components/ContactInfo/ContactInfo";
import ContactForm from "./Components/ContactForm/ContactForm";
import BottomBar from "../../Components/BottomBar/BottomBar";
import WhatsAppButton from '../../Components/WhatsAppButton/WhatsAppButton';
import './Contact.css'
const Contact = () => {
    return(
        <div class ='contact-container' >
            {/* <Maps/> */}
            <ContactInfo/>
            <ContactForm/>
            <BottomBar/> 
            <WhatsAppButton/> 
        </div> 
    )
}

export default Contact;