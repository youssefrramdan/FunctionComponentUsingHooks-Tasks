import React, { useState, useRef, useEffect } from "react";
import "./../Style.css";

const SignUp = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState(null);
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    setUserData({
      username: formData.username,
      email: formData.email,
      signUpTime: new Date().toLocaleString(),
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSignUp} className="form-container">
        <h2>Sign Up</h2>
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Name"
            value={formData.username}
            onChange={handleChange}
            required
            ref={usernameRef}
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
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
        <button type="submit" className="btn-primary">
          Sign Up
        </button>

        {/*------------ Switch Label to Login ------------- */}
        <p className="switch-text">
          Already have an account?{" "}
          <label onClick={switchToLogin} className="switch-link">
            Login
          </label>
        </p>
      </form>

      {/*------------ print user data ------------- */}

      {userData && (
        <div className="user-data">
          <h3>User Data:</h3>
          <p>Name: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p>SignUp Time: {userData.signUpTime}</p>
        </div>
      )}
    </div>
  );
};

export default SignUp;
