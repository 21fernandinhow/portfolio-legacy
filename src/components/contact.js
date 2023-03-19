import React from "react";
import { Link } from "react-router-dom";
import '../images/wpp.webp';
import '../images/email.webp';

function Contact() {
  return (
    <div data-aos="fade-in" data-aos-duration="2000" className="contact">
        <h2>Get in touch</h2>
        <p>Let's talk about your project</p>

        <form action="https://formsubmit.co/21fernandinhow@gmail.com" method="POST">

          <input type="text" name="name" id="name" placeholder="Name"/>

          <input type="email" name="email" id="email" placeholder="E-mail"/>

          <textarea id="message" name="message" rows="2" placeholder="Message"/>

          <button type="submit" className="btn">Send Message</button>
          <Link to="/" className="btn">Back to Home</Link>

        </form>
    </div>
  );
};

export default Contact;