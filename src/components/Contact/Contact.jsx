import React, { useRef } from 'react';
import "../home/ScrollDown";
import emailjs from 'emailjs-com';
import './contact.css';
import ScrollUp from './ScrollUp';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_9apk1rd';
    const templateID = 'template_jjtlbks';
    const userID = 'eSHOuOTrbECcYi0vQ';

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Information</span>

      <div>
        <h2 className="call-to-action">Reach Out!</h2>
        <form ref={form} onSubmit={sendEmail} className="form">
          <input 
            type="text"
            className="userName"
            placeholder="Full Name"
            name="user__name"
            required
          />
          <input
            type="email"
            className="userEmail"
            placeholder="Email"
            name="user__email"
            required
          />
          <textarea
            className="userMessage"
            placeholder="Message"
            name="user__message"
            required
          ></textarea>
          <button type="submit" className="send__button">
            Send Message
          </button>
        </form>
      </div>
      <ScrollUp/>
    </section>
  );
};

export default Contact;