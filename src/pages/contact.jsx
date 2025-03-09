import { useState } from 'react';

export default function contact() {
    return (
      <div>
        <h1>Contact Me</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
      </div>
    );
  }




  /*
  function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
  
      // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
      return name === 'firstName' ? setFirstName(value) : setLastName(value);
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // Alert the user their first and last name, clear the inputs
      alert(`Hello ${firstName} ${lastName}`);
      setFirstName('');
      setLastName('');
    };
  
    return (
      <div className="container text-center">
        <h1>
          Hello {firstName} {lastName}
        </h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }*/