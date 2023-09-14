import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setErrorMessage('Email is invalid!');
      return;
    }
    if(!name || !email || !message) {
      let missingFields = [];

      if (!name) {
        missingFields.push('Name');
      }
      if (!email) {
        missingFields.push('Email');
      }
      if (!message) {
        missingFields.push('Message');
      }

      setErrorMessage(`${missingFields.join(', ')} ${missingFields.length === 1 ? 'is' : 'are'} required`);
      return;
    }
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="contact pages">
      <h2>Contact</h2>
      <form className='form'>
        <label for="name" className="form-label">Name:</label>
        <input
          className="form-control form-item"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          id="name"
          placeholder="name"
        />
        <label for="email" className="form-label">Email:</label>
         <input
          className="form-control form-item"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          id="email"
          placeholder="email"
        />
        <label for="message" className="form-label">Message:</label>
         <textarea
          className="form-control form-item"
          rows="6"
          value={message}
          name="message"
          id="message"
          onChange={handleInputChange}
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit} className='btn btn-primary submit-btn'>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;