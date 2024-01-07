import React, { useState } from "react";
import  './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_nh920rd', 'template_1hmzwmh', form.current, 'L9gJko0nbX23OR1eR')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            setTimeout(resetForm, 2000);
        }, (error) => {
            console.log(error.text);
        });
    };

    const resetForm = () => {
        // Reset the form fields
        form.current.reset();
        // You can also clear the 'done' state if needed
         setDone(false);
    };

  return (
    <div className="contactWrapper">
      {/* right */}
      <div className="contactright">
      <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thank for Contact me.."}</span>
        </form>
      </div>

            {/* left */}
            <div className="contactleft">
        <span>Contact</span>
        <span>me.. 📩</span>

      </div>
    </div>
  );
};

export default Contact;
