
import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'; // Import your CSS file

export default function Contact() {
  const token = localStorage.getItem('jwtToken');
  const user = token ? true : false;  // Check if token exists to determine if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();  // Reload the page to reflect the logout state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic, like sending the data to your server
    console.log("Form submitted");
  };

  return (
    <>
      <div className="nav">
        <header className="header">
          <h1 className="logo">SheAlerts</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/Posts">ShareX</Link>
            <Link to="/safety">Safety Tips</Link>
            {user ? (
              <Link to="/" onClick={handleLogout}>Logout</Link>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </nav>
        </header>
      </div>
      <div className="contact-container">
        <h2>Get in Touch</h2>
        {/* <div className="contact-info">
          <p>Feel free to reach out to us!</p>
        </div> */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />


          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" id="bt1">Send Message</button>
        </form>
      </div>
    </>
  );
}
