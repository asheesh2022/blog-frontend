import React, { useContext, useEffect, useState } from 'react'
import forest from "./forest.jpg"
import "./Home.css"
import Post from "../../Post";
import { UserContext } from "../../UserContext";


import { Link } from 'react-router-dom'
// import Header from "../Header/Header"
// import Login from '../Login/Login'

export default function Home() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch('https://blog-backend-tvt7.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('https://blog-backend-tvt7.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;


  return (
    <>

      {username && (
        <>
          <Link to="/create">Create new post</Link>
          <a style={{ cursor: "pointer" }} onClick={logout}>Logout ({username})</a>
        </>
      )}
      {/* {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )} */}



      {/* addede my me above the class hoime page */}
      {/* {  posts.map(post => ( <Post {...post} /> ))} */}

      {/* <Header/> */}
      <div className='homePage' >
        <div className="home">
          <div className="navbar">
            <ul>

              {/* <Link to="/create" style={{ textDecoration: "none" }}   >  <li className='blog'>Blog</li> </Link> */}

              <Link to="/register" style={{ textDecoration: "none" }}  >  <li className='signUpList'>SignUp</li> </Link>
              <Link to="/login" style={{ textDecoration: "none" }}  >   <li className='login' >Login</li> </Link>

            </ul>

          </div>


          <div className="forestImageParent">
          <div className="forestImage">

            <img className="forest" src={forest} alt="" />

          </div>
          </div>
        </div>
      </div>
    </>
  )
}


