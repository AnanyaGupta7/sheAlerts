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
          <h2>ABOUT MULTIPLY</h2>
          <p>Multiply is an online platform with easy-to-understand information on personal finance. We are a non-profit initiative by Creador Foundation and our carefully researched content is neutral and free.
          </p>
        </div>

        <div className="postcards-container">
          <div className="postcard">
            <h1>Our Goals</h1>
            <p>Through videos, guides, blog posts, calculators and infographics we hope to help you make sense of finance so you can make better financial decisions.</p>
            <p>We asked Malaysians what types of personal finance questions they’d like answered. Along the way, we received excellent feedback which we incorporated into our content.</p>
            <p>We then researched answers to those questions, reviewed our answers with experts, and tested our content through focus groups.</p>
            <p>Through this process, we’ve developed fun and engaging easy-to-use materials. If you have feedback on how we can make our platform better, we’d love to hear from you.</p>
          </div>

          <div className="postcard">
          <img src={PostcardImage} alt="Postcard" className="postcard-image"/>
          </div>

          <div className="postcard">
            <h1>Legal Stuff</h1>
            <p>Information and tools provided by Multiply should be used only as a guide and are not intended to be your only source of information when making financial decisions</p>
            <p>We are not licensed financial advisors.</p>
            <p>Self-Defense Training: Learn valuable self-defense techniques...</p>
            <p>You should always seek professional advice. Click here to learn more about our terms of service and our data protection & privacy policy.</p>
            <p>We are not licensed financial advisors. You should always seek professional advice.</p>
          </div>
        </div>

        <div className="last">
          <h1>Great channel to get insight on day-to-day matters such as savings, loans, investments etc. Find it super useful that this website lays out options for current and future financial planning.</h1>
        </div>
      </div>
    </>
  );
}

export default About;
