import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x60sgmp', 'template_jjtlbks', form.current, 'eSHOuOTrbECcYi0vQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section className="contact section" id='contact'>
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Information</span>

      <div>
        <h2>Reach Out!</h2>
        <form ref={form} onSubmit={sendEmail} className="form">
            <input type="text" className="userName" placeholder="Full Name" name="user__name" required/>
            <input type="email" className="userEmail" placeholder="Email" name="user__email" required/>
            <input type="message" className="userMessage"placeholder="Message" name="user__message" required/>
            <button type="submit" className="send__button">Send Message</button>

        </form>
      </div>
    </section>
  );
};

export default Contact;