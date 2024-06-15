// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Registeration() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUsername = (event) => {
//     setUsername(event.target.value);
//     console.log(event);
//   };
//   const handlePassword = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleFormData = async (event) => {
//     try {
//       event.preventDefault();
//       // console.log(username,password)
//       const response = await axios.post("http://localhost:3000/Register", {
//         username: username,
//         password: password,
//       });

//       //console.log(response);
//       if (response.status === 201) {
//         navigate("/Login");
//       }
//     } catch (error) {}
//   };
//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleFormData}>
//         <label>Username</label>
//         <input type="text" value={username} onChange={handleUsername}></input>
//         <br></br>
//         <label>Password: </label>
//         <input
//           type="password"
//           value={password}
//           onChange={handlePassword}
//         ></input>
//         <br></br>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Registeration;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Registration.css'

function Registration() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post("http://localhost:3000/Register", {
        username, // Destructuring for cleaner syntax
        password,
      });

      if (response.status === 201) { // Assuming successful registration returns 201 Created
        navigate("/Login");
      } else {
        console.error("Registration failed:", response); // Handle potential errors
      }
    } catch (error) {
      console.error("Registration error:", error); // Handle unexpected errors
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsername} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePassword} />
        <br />
        <button type="submit" id="reg">Register</button>
      </form>
    </div>
  );
}

export default Registration;
