import React from 'react';
import './ContactForm.css';
import Countdown from './Countdown';
function ContactFormConfirmation() {
  return (
    <div className="contact-form-confirmation">
      <h2>Thank you for your message!</h2>
      <p>We will get back to you within 24 hours.</p>
      <Countdown/>
    </div>
  );
}

export default ContactFormConfirmation;