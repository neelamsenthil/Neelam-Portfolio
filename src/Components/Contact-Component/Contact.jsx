import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "34d55596-1341-4233-9622-90f0ca3ed52a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    
  return (
    <div className='contact-container' id='contact'>
        <div className="contact-title">
            <h1>Contact</h1>
            <img src={theme_pattern} className='theme-img' alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> 
                        <p>neelamsenthil007@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                    <img src={call_icon} alt="" /> 
                    <p>+91 9047189036</p>
                    </div>

                    <div className="contact-detail">
                    <img src={location_icon} alt="" /> 
                    <p>Chennai</p>
                    </div>
    

        
                </div>
            </div>

            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="yourname">Your Name</label>
                <input type="text" placeholder='Enter your name' id='yourname'  name='name' />
                <label htmlFor="email">Your Email </label>
                <input type="email" placeholder='Enter your email' id='email' name='email' />
                <label htmlFor="message">Write your message here</label>
                <textarea name="message" id="message" rows="8" placeholder='Enter your message'></textarea>
                <button className="submit-btn" type="submit">Submit</button>
            </form>

        </div>

    </div>
  )
}

export default Contact