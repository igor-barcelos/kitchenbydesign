import './WhatsAppButton.css'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
const WhatsAppButton = () => {
    return(
        <div> 
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
        <a href="https://wa.me/5519998988908" class="whatsapp_float" target="_blank" rel="noopener noreferrer" >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      </div>
    )
}
export default WhatsAppButton;