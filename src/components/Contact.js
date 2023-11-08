import React from 'react';
import emailjs from 'emailjs-com';
import './styles/contact.css';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
      .then((result) => {
        console.log('Email sent:', result.text);
      }, (error) => {
        console.error('Email could not be sent:', error.text);
      });

    e.target.reset();
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <label>
          Name:
          <input type="text" name="from_name" required />
        </label>
        <label>
          Email:
          <input type="email" name="user_email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default Contact;