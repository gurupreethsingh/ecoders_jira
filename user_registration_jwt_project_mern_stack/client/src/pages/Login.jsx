import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleLogout();
      alert("Session timed out. Please log in again.");
    }, 2 * 60 * 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (usernameOrEmail && password) {
      try {
        const response = await axios.post("http://localhost:3001/login", { usernameOrEmail, password });
        const { user, token } = response.data;
  
        // Store username and token in local storage
        localStorage.setItem('username', user.username);
        localStorage.setItem('token', token);
  
        alert("Login successful!");
        navigate("/home"); // Use navigate instead of history.push
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setErrorMessage("Invalid username/email or password.");
        } else {
          setErrorMessage("An error occurred. Please try again later.");
        }
      }
    } else {
      setErrorMessage("Please enter username/email and password.");
    }
  };
  
  const handleLogout = () => {
    localStorage.clear();
    document.cookie = 'yourCookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate("/login"); // Use navigate instead of history.push
  };

  return (
    <div className='container mt-5 mainformdiv'>
      <div>
        <form className='loginform border  rounded mx-auto p-5 mb-5' onSubmit={handleLogin}>
          <h6 className='text-decoration-underline text-center'>Login</h6>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <div className="mb-3">
            <label htmlFor="usernameOrEmail" className="form-label">Email address / Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="usernameOrEmail" 
              aria-describedby="emailHelp" 
              required
              value={usernameOrEmail} 
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              name="usernameOrEmail"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              required
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </div>

          <div className="mb-3 mt-3">
            <a className='text-dark' href="/register">Need Account? Sign Up</a>
          </div>
          <button type="submit" className="btn btn-sm text-light rounded-5 ps-5 pe-5">Sign In</button>
        </form>
      </div> 
    </div>
  );
}

export default Login;