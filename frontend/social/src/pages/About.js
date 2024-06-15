import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import PostcardImage from "../pages/abt.jpg";
function About() {
  useEffect(() => {
    const postcards = document.querySelectorAll('.postcard');

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function showPostcards() {
      postcards.forEach(postcard => {
        if (isInViewport(postcard)) {
          postcard.classList.add('fade-in');
        }
      });
    }

    // Initial check
    showPostcards();

    // Event listener for scroll
    window.addEventListener('scroll', showPostcards);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', showPostcards);
    };
  }, []);

  const token = localStorage.getItem('jwtToken');
  const user = token ? true : false;

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
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

      <div className="content1">
        <div className="heading">
          <h2>ABOUT SHEALERTS</h2>
          <p>Welcome to SheAlerts, where women's safety is our top priority...
          At SheAlerts, our mission is to create a safer environment for women.
          </p>
        </div>

        <div className="postcards-container">
          <div className="postcard">
            <h1>Our Vision</h1>
            <p>Empowering individuals with the knowledge and tools to navigate the world safely and confidently.</p>
            <p>Creating a culture where everyone feels secure and supported in their daily lives.</p>
            <p>Fostering a community dedicated to promoting safety, respect, and equality for all.</p>
            <p>Striving for a world where every person can live without fear of harm or violence.</p>
            <p>Working towards building a society where women's safety is prioritized and protected.</p>
          </div>

          <div className="postcard">
          <img src={PostcardImage} alt="Postcard" className="postcard-image"/>
          </div>

          <div className="postcard">
            <h1>What We Offer</h1>
            <p>Safety Tips and Guides: Access a comprehensive collection of safety tips and guides...</p>
            <p>Emergency Assistance: Find information on how to seek help during emergencies...</p>
            <p>Self-Defense Training: Learn valuable self-defense techniques...</p>
            <p>Safety Products: Discover and shop for the latest safety products...</p>
            <p>Community Support: Connect with like-minded individuals through our community forums...</p>
          </div>
        </div>

        <div className="last">
          <h1>Together, let's empower women to live confidently and fearlessly.</h1>
        </div>
      </div>
    </>
  );
}

export default About;
