// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
// import axios from 'axios';
// import './CreatePost.css'; // Import the CSS file

// export default function CreatePost() {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const navigate = useNavigate(); // Initialize the navigate function

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('jwtToken');
//       if (!token) {
//         alert('You must be logged in to create a post');
//         return;
//       }

//       const response = await axios.post(
//         'http://localhost:3000/post', // Changed endpoint to /post
//         { title, content },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 201) {
//         alert('Post created successfully');
//         navigate('/addblog'); // Redirect to AddBlog page after creating a post
//       }
//     } catch (error) {
//       console.error('There was an error creating the post!', error);
//       alert('Failed to create the post');
//     }
//   };

//   return (
    
//      <>
//       <section className="banner" id="home1">
//         <form className="loginform" action="/addblog" method="post" encType="multipart/form-data">
//           <input type="text" name="title" placeholder="Enter Title" />
//           <input type="text" name="content" placeholder="Enter content" />
//           <input type="file" name="image" />
//           <button type="submit">Add blog</button>
//         </form>
//       </section>
//       </>
    
//   );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreatePost.css'; // Import the CSS file

function CreatePost() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => prevIndex - 1);
  };
  
  const token = localStorage.getItem('jwtToken');
  const user = token ? true : false;  // Check if token exists to determine if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();  // Reload the page to reflect the logout state
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
            <Link to="/safety">Courses</Link>
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
      <div className="disclaimer-container">
        <div className="disclaimer">
          <p>Women's Helpline contacs &nbsp;&nbsp;&nbsp;&nbsp;Women in Distress	1091  &nbsp;&nbsp;&nbsp;&nbsp;  Domestic Abuse	181   &nbsp;&nbsp;&nbsp;&nbsp;   National Commission For Women (NCW)	011-23237166, 23234918</p>
        </div>
      </div>
      <section className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${slideIndex * 320}px)` }}>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KVpxP3ZZtAc?si=nc3RzLDooMSUSQVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FGEuDMNw0dA?si=74AT556Up2Byc0LP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pndPbpHLpos?si=PdUjmcDOnZbT0k9H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/M4_8PoRQP8w?si=WZ0T3F10AIRFzgXG&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ce54QNDoqOY?si=pJNMX_MxTCx_O5zI&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Ww1DeUSC94o?si=ukX9uQCyD63UGPQG&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Q6XpF9824Ho?si=VbQ6_g_kE78tB70V&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VI0zJhcppzc?si=26Z38Hhq3z1nbvCU&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/u4iIqxRg-Dw?si=CtY8F9tQPjiazvj9&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9m-x64bKfR4?si=LhJ8WqjwTe6JVTIs&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/x7o1HvtkBn0?si=-ysxRfZIpkGhSnCz&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/v5sIxCDmGLs?si=xlUTGOHWJqMC8dLA&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          
          {/* Add more video iframes here */}
        </div>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </section>



    </>
  );
}

export default CreatePost;
