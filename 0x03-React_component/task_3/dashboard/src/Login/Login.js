// Login.js
import React from 'react';
import './Login.css'; // Import your CSS if needed

const Login = () => {
  // Function to handle focus on email input
  const handleFocusOnEmail = () => {
    inputEmailRef.current.focus();
  };

  // Function to handle focus on password input
  const handleFocusOnPassword = () => {
    inputPasswordRef.current.focus();
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Your logic for handling button click
  };

  // Refs for email and password inputs
  const inputEmailRef = React.createRef();
  const inputPasswordRef = React.createRef();

  return (
    <>
      {/* BODY */}
      <div className='App-body'>
        <p>Login to access the full dashboard</p>

        {/* EMAIL ZONE */}
        <label onClick={handleFocusOnEmail} id='label_email'>
          email
        </label>
        <input ref={inputEmailRef} id='input_email' type='text'></input>

        {/* PASSWORD ZONE */}
        <label onClick={handleFocusOnPassword} id='label_password'>
          password
        </label>
        <input ref={inputPasswordRef} id='input_password' type='password'></input>

        {/* BUTTON ZONE */}
        <button onClick={handleButtonClick}>OK</button>
      </div>
    </>
  );
};

export default Login;

