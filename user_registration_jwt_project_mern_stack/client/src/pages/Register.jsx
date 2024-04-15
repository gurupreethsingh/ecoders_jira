import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  // State variables for email, username, and password
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // to see if registration was successfull or not. 
  const [registrationSuccess, setRegistrationSuccess] = useState(false);


// function to register a new user when the resgister form gets submitted.
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3001/register", { email, username, password })
    .then(response => {
      // Display alert
      alert("Registration successful! Please login with your credentials.");
      setEmail("");
      setUsername("");
      setPassword("");
      setRegistrationSuccess(true);
      // Navigate to login page with query parameter indicating successful registration
      window.location.href = `/login?registrationSuccess=${registrationSuccess}`;
    })
    .catch(error => console.error(error));
};

  return (
    <div className='container mt-5 mainformdiv'>
      <div>
        <form className='loginform border rounded mx-auto p-5 mb-5' onSubmit={handleSubmit}>
          <h6 className='text-decoration-underline text-center'>Register</h6>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email Id</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              required
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleInputUsername" 
              aria-describedby="emailHelp" 
              required
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              required
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3 mt-3">
            <a className='text-dark' href="/login">Already Have an Account? Sign In</a>
          </div>

          <button type="submit" className="btn btn-sm text-light ps-5 pe-5 rounded-5">Sign Up</button>
        </form>
      </div> 
    </div>
  );
};

export default Register;