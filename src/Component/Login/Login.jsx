import React, { useState, useRef, useEffect } from 'react';
import './../Style.css';

const Login = ({ switchToSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [userData, setUserData] = useState(null);
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus(); // Focus on the first input when the component mounts
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setUserData({
      email: formData.email,
      loginTime: new Date().toLocaleString()
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="form-container">
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            ref={emailRef}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Login</button>
        
        {/* --------------- Switch Label to SignUp*------------ */}
        <p className="switch-text">
          Don’t have an account?{' '}
          <label onClick={switchToSignUp} className="switch-link">
            Sign Up
          </label>
        </p>
      </form>

      {/* Display user data */}
      {userData && (
        <div className="user-data">
          <h3>User Data:</h3>
          <p>Email: {userData.email}</p>
          <p>Login Time: {userData.loginTime}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
