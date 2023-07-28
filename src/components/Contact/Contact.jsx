import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [showButton, setShowButton] = useState(false);

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

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      {showButton && (
        <button className="scroll-to-top" onClick={handleButtonClick}>
          <div className="arrow-up"></div>
        </button>
      )}
    </section>
  );
};

export default Contact;