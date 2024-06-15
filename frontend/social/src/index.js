import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Counter from "./pages/Counter";
import ViewPosts from "./pages/ViewPosts";
import Registeration from "./pages/Registration";
import CreatePost from "./pages/CreatePost";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <h1>PAge not found</h1>,
  },
  {
    path: "/About",
    element: <About></About>,
  },
  {
    path: "/Contact",
    element: <Contact></Contact>,
  },
  {
    path: "/posts/:postId",
    element: <Posts></Posts>,
  },
  {
    path: "/Posts",
    element: <ViewPosts></ViewPosts>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/Posts/:postID",
    element: <Posts></Posts>,
  },
  {
    path: "/Counter",
    element: <Counter></Counter>,
  },
  {
    path: "/Register",
    element: <Registeration></Registeration>,
  },
  {
    path:"/safety",
    element:<CreatePost></CreatePost>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
