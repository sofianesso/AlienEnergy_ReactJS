import React, { useState } from 'react';
import { Button } from '../Button/Button';
import ContactFormConfirmation from './ContactFormConfirm';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const messageData = {
      name: formData.name,
      email: formData.email,
      content: formData.message
    };

    const response = await fetch("https://localhost:5006/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messageData)
    });

    if (response.ok) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  if (formSubmitted) {
    return <ContactFormConfirmation />;
  }

  return (
    <div className="contact-form-background">
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={submitForm}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <Button buttonStyle='btn--primary' type="submit">SEND</Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
