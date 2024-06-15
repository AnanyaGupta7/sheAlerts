import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './Viewposts.css';
// import './PostsPage.css';
import { useNavigate } from 'react-router-dom';
function Post() {
  const [posts, setPosts] = useState([]);
  const [login, setLogin] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem("jwtToken")){
      (async()=>{
        try{
          const response = await axios.get("http://localhost:3000/posts", {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
          })

          // console.log(response)
          // console.log("hhhe");
          setPosts(response.data);
        }
        catch(error){
          console.log(error);
        }
      })()
      setLogin(true);
  }
  else{
    setLogin(false);
  }
  }, []);

  const userJSON = localStorage.getItem('jwtToken');
  const user = userJSON ? userJSON : null;

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  };


  return (
    <>    <div className="nav">
    <header className="header">
      <h1 className="logo">SheAlerts</h1>
      <nav>
      <Link to='/'>Home</Link>  
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
    <div className='whole'>
        {!login && <h1 className='text-center font-bold text-xl'>Please Login First</h1>}
        {login &&
            <div className="post-container">
             
                {posts.map((post) => (
                <div key={post._id} className="post-card">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                ))}
            </div>
        }
    </div>
  
    </>
  );
}

export default Post;