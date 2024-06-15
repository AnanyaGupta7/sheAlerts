
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// export default function Home() {
//   const [location, setLocation] = useState(null);
//   const [error, setError] = useState(null);

//   const handleEmergencySiren = () => {
//     const audio = new Audio("/siren.mp3");
//     audio.play();
//   };

//   const handleShowLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setLocation({ latitude, longitude });
//         },
//         (error) => {
//           setError(error.message);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by this browser.");
//     }
//   };

//   const userJSON = localStorage.getItem('jwtToken');
//   const user = userJSON ? userJSON : null;

//   const handleLogout = () => {
//     localStorage.removeItem('jwtToken');
//     window.location.reload();
//   };

//   return (
//     <div className="container">
//       <header className="header">
//         <h1 className="logo">SheAlerts</h1>
//         <nav>
//           <Link to='/'>Home</Link>
//           <Link to="/about">About Us</Link>
//           <Link to="/contact">Contact Us</Link>
//           <Link to="/Posts">ShareX</Link>
//           <Link to="/safety">Safety Tips</Link>
//           {user ? <Link to="/" onClick={handleLogout}>Logout</Link> : (
//             <>
//               <Link to="/login">Login</Link>
//               <Link to="/register">Register</Link>
//             </>
//           )}
//         </nav>
//       </header>
       
//       <div id="make">
//         <div id="div1">
//           {/* <img src="imgg.jpg" alt="oops! network"></img> */}
//         </div>
//         <div id="div2">
//           <p id="div2_text">She's Strong, We have got her back.</p>
//           <button className="emergency-button" onClick={handleEmergencySiren}>
//             Activate Emergency Siren
//           </button>
//           <button className="location-button" onClick={handleShowLocation}>
//             Show My Location
//           </button>
//           {location && (
//             <p className="location-text">
//               Latitude: {location.latitude}, Longitude: {location.longitude}
//             </p>
//           )}
//           {error && (
//             <p className="location-error">{error}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleEmergencySiren = () => {
    const audio = new Audio("/siren.mp3");
    audio.play();
  };

  const handleShowLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const userJSON = localStorage.getItem('jwtToken');
  const user = userJSON ? userJSON : null;

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">SheAlerts</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/Posts">ShareX</Link>
          <Link to="/safety">Safety Tips</Link>
          {user ? <Link to="/" onClick={handleLogout}>Logout</Link> : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>

      <div className="disclaimer-container">
        <div className="disclaimer">
        <p>Women's Helpline contacts: &nbsp;&nbsp;&nbsp;&nbsp;Women in Distress	1091  &nbsp;&nbsp;&nbsp;&nbsp;  Domestic Abuse	181   &nbsp;&nbsp;&nbsp;&nbsp;   National Commission For Women (NCW)	011-23237166, 23234918</p>
        </div>
      </div>

      <div id="make">
        <div id="div1">
          {/* <img src="imgg.jpg" alt="oops! network"></img> */}
        </div>
        <div id="div2">
          <p id="div2_text">She's Strong, We have got her back.</p>
          <button className="emergency-button" onClick={handleEmergencySiren}>
            Activate Emergency Siren
          </button>
          <button className="location-button" onClick={handleShowLocation}>
            Show My Location
          </button>
          {location && (
            <p className="location-text">
              Latitude: {location.latitude}, Longitude: {location.longitude}
            </p>
          )}
          {error && (
            <p className="location-error">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
