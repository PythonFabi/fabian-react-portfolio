import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [name, submitName] = useState('');
  const [email, submitEmail] = useState('');
  const [message, submitMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      submitName('inputValue');
    } else if (inputType === 'email') {
      submitEmail(inputValue);
    } else {
      submitMessage(inputValue);
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
    submitName('');
    submitEmail('');
    submitMessage('');
  };

  return (
    <div className="contact pages">
      <h2>Contact</h2>
      <form>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
         <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
         <textarea
          rows="5"
          cols="33"
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
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