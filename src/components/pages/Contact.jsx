// import react, use state for the contact form and validate email for email validation
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

// Contact component
function Contact() {
  // declare variables and useState function to create a function to update state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // get input type and corresponding value for each forminput field
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // if condition to check, which type is being input and set the value for corresponding type
    if (inputType === 'Name') {
      setName(inputValue);
    } else if (inputType === 'Email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // function that checks which field is missing and once the cursor moves out it displays, which fields are missing
  const handleblur = (e) => {
    if(!name || !email || !message) {
      // declare array for the missing fields
      let missingFields = [];

      // push empty values into missingFields array
      if (!name) {
        missingFields.push('Name');
      }
      if (!email) {
        missingFields.push('Email');
      }
      if (!message) {
        missingFields.push('Message');
      }

      // set errormessage which checks which and how many fields are missing, if more than one field is missing the message switches from 'is' to 'are'
      setErrorMessage(`${missingFields.join(', ')} ${missingFields.length === 1 ? 'is' : 'are'} required`);
      return;
    }
  };

  // once the form is being submitted all the inputfields are being cleared
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // if email input doesn't pass validateEmail function display errormessage that email is invalid
    if(!validateEmail(email)) {
      setErrorMessage('Email is invalid!');
      return;
    }
    
    // clear input fields
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  // display form
  return (
    <div className="contact pages">
      <h2>Contact</h2>
      <form className='form'>
        <label htmlFor="name" className="form-label">Name:</label>
        {/* input name value, with the name "Name", handle inputChange function for single Field input, type text, if cursor moves out handleBlur function, with id and placeholder name */}
        <input
          className="form-control form-item"
          value={name}
          name="Name"
          onChange={handleInputChange}
          onBlur={handleblur}
          type="text"
          id="name"
          placeholder="name"
        />
        <label htmlFor="email" className="form-label">Email:</label>
        {/* input for email */}
         <input
          className="form-control form-item"
          value={email}
          name="Email"
          onChange={handleInputChange}
          onBlur={handleblur}
          type="email"
          id="email"
          placeholder="email"
        />
        <label htmlFor="message" className="form-label">Message:</label>
        {/* textarea field for message */}
         <textarea
          className="form-control form-item"
          rows="6"
          value={message}
          name="Message"
          onBlur={handleblur}
          id="message"
          onChange={handleInputChange}
          placeholder="message"
        />
        {/* submit button that handles the handleFormSubmit */}
        <button type="button" onClick={handleFormSubmit} className='btn btn-primary submit-btn'>Submit</button>
      </form>
      <p>Alternatively you can find my email in the footer, once the mail icon is clicked</p>
      {/* errorMessage in form of a paragraph */}
      {errorMessage && (
        <div>
          <em><p className="error-text">{errorMessage}</p></em>
        </div>
      )}
    </div>

    
  );
}

export default Contact;


