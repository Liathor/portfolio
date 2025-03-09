import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
    const [contactName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'contactName') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
      };
    
    const checkErrors = (e) => {
        console.log("onBlur triggered for:", e.target.name);
        const { name } = e.target;
        if (name === "contactName" && !contactName.trim()) {
            setErrorMessage('Please enter your name');
        }
        else if (name === "email" && !validateEmail(email)) {
            setErrorMessage('Please enter a valid email');
        }
        else if (name === "message" && !message.trim()) {
            setErrorMessage('Please enter a message');
        }
        else {
            setErrorMessage("");
        }
    }
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (!setName) {
        setErrorMessage('Please enter your name');
        return;
      }
      if (!validateEmail(email)) {
        setErrorMessage('Please enter a valid email');
        return;
      }
      if (!setMessage) {
        setErrorMessage('Please enter a message.')
        return;
      }
      alert(`Thank you for reaching out ${contactName}. I'll reach out to you as soon as I am able.`);
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
      <div className="container text-center">
        <h2>
          Contact
        </h2>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={contactName}
            name="contactName"
            onChange={handleInputChange}
            type="text"
            placeholder="contactName"
            onBlur={checkErrors}
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="email"
            onBlur={checkErrors}
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
            onBlur={checkErrors}
          />
          <button type="submit">
            Submit
          </button>
        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    );
  }