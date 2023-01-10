import React from "react";
import { Link } from "react-router-dom";
import '../images/wpp.webp';
import '../images/email.webp';

function Contact() {
  return (
    <div data-aos="fade-in" data-aos-duration="2000">
        <h2>Get in touch!</h2>
        <p>Let's talk about your project</p>

        <p><a className="link-contact" href="https://api.whatsapp.com/send/?phone=5532988407783&text&type=phone_number&app_absent=0">
          <img alt="whatsapp" className="contact-icon" src="../images/wpp.webp"/> Whatsapp </a></p>

          <p><a className="link-contact" href="mailto:21fernandinhow@gmail.com"> 
            <img alt="email" className="contact-icon" src="../images/email.webp"/> 21fernandinhow@gmail.com </a></p>
        <br/>
        <Link to="/" className="btn-back">Back to Home</Link>
    </div>
  );
};

export default Contact;