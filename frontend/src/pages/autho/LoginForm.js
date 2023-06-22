import React, { useState } from 'react';
import http from "../../http";
import { redirect } from 'react-router-dom';
import axios from 'axios';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Send login data to Laravel backend
  //   const loginData = { email, password };
  //   // Implement your API call or data submission logic here
  //   // For example, using Axios:
  //   http.post('/login', loginData)
  //     .then(response => {
  //       // Handle response

  //       console.log(loginData.email);
  //       redirect("/")
  //     })
  //     .catch(error => {
  //     console.log(error);
  //     });
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfTokenElement = document.querySelector('meta[name="csrf-token"]');
    console.log(csrfTokenElement); // Check if it logs the element or null

    const csrfToken = csrfTokenElement ? csrfTokenElement.getAttribute('content') : null;
    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const loginData = { email, password };
    try {
      const response = await http.post('/login', loginData, {
        headers: {
          'X-CSRF-TOKEN': csrfToken,
        },
      });

      // Handle response
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="container  ">
      <div className="row    justify-content-center">
        <div className="col-md-6 card position-absolute top-50 start-50 translate-middle " >
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary mt-3">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;


