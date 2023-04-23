import './ContactForm.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useHistory } from 'react-router-dom';
const ContactForm = () => {

const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            'service_nt0hcrd', 
            'template_shs1a6k', form.current, 
            '1UfOFpjbIGpy3cUWV')
        .then((result) =>{
            console.log(result.text);
            window.location.href = './success';
        }, (error) => {
            console.log(error.text);
        });
};

return(
<div class='form-wrapper'>
    <div class="form-container">
        <h1> Contact Us !  </h1>
        <div class='wrapper-inputs'> 
            <form ref={form} onSubmit={sendEmail}>
                <div> 
                    {/* <label>Name</label> */}
                    <input type="text" name="user_name" placeholder ='Name' required />
                    <input type="text" name="user_Lastname" placeholder ='Last Name' required />
                    {/* <label >Email</label> */}
                    <input style={{marginRight:'0'}} type="text" name="user_email"  placeholder ='Email' required/>
                </div>
                
                <div style={{display:'flex', alignItems:'center'}}>
                    {/* <label>Message</label> */}
                    <textarea name="message" style={{width:'100%'}} placeholder ='Message'/>
                </div>
                <div style={{display :'flex', justifyContent:'center'}}>
                      <input type="submit" value="Send" className='submit_button'/> 
                </div> 
               
            </form>
        </div> 
    </div>
</div>
)
}
export default ContactForm;