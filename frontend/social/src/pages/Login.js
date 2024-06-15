
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value); // Stored username
  };

  const handlePassword = (event) => {
    setPassword(event.target.value); // Stored password
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault(); // Prevent page reload

      const response = await axios.post("http://localhost:3000/Login", {
        username: Username,
        password: Password,
      });

      console.log(response);

      if (response.status === 200) {
        localStorage.setItem("jwtToken", "Bearer "+response.data.token); 
        
        navigate("/");
      
      } else {
        setLoginErr("Invalid Username or Password");
      }
    } catch (error) {
      setLoginErr("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Username:</label>
        <input type="text" value={Username} onChange={handleUsername} />
        <br />
        <label>Password:</label>
        <input type="password" value={Password} onChange={handlePassword} />
        <br />
        <button type="submit" id="sub1">SUBMIT</button>
      </form>
      {loginErr && <h2 className="error-message">{loginErr}</h2>}
      
    </div>
  );
}