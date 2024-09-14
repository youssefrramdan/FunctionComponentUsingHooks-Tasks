import React, { useState, useEffect } from "react";
import "./UserNameChangeMessage.css"; 

function UserNameChangeMessage () {
  const [username, setUsername] = useState("");
  const [UserNameChange, setUserNameChange] = useState("");

  useEffect(() => {
    if (username) {
      setUserNameChange(`iam, ${username}!`);
    } else {
      setUserNameChange("Enter you Name");
    }
  }, [username]);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={handleInputChange}
        className="input-field"
      />
      <p className="UserNameChange">{UserNameChange}</p>
    </div>
  );
};

export default UserNameChangeMessage;
