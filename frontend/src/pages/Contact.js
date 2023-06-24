import React from 'react';
import Navbar from "./Navbar"
import http from '../http';
import Footer from './Footer';
import  { useEffect, useState } from "react";
function Contact (){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a data object to hold the form values
    const data = {
      name,
      email,
      message,
    };

    // Make a POST request to the backend API
    http.post('/contacts', data)
      .then((response) => {
        console.log(response.data);
        // Handle successful response
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

return (<><nav>
  <Navbar />
</nav>
<div  className="card container text-center">
<div className="card-header">
    Contact un utlisateur
  </div>
  <div class="card-body">
<form onSubmit={handleSubmit}>
  
    <div  className="mb-3 row">

      <label className="col-sm-2 form-label">Name:</label>
      <input  className="col-sm-9 col-form-control" type="text" value={name} onChange={handleNameChange} />
    </div>
    <div className="mb-3 row">
      <label  className="form-label col-sm-2">Email:</label>
      <input  class="col-sm-9 col-form-control" type="email" value={email} onChange={handleEmailChange} />
    </div>
    <div className="mb-3 row">
      <label className="col-sm-2 form-label">Message:</label>
      <textarea class="col-sm-9 col-form-control" rows="3" value={message} onChange={handleMessageChange} />
    </div>
    <button type="submit" class="btn btn-primary">Envoyer</button>
  </form>
  </div>
  <div className="card-footer text-body-secondary">
   ecrit une message ici &#127773;
  </div>
  </div>
<Footer />
  </>);

}
export default Contact;