import { Link, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import Post from "./Post";


export default function Header() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://blog-backend-tvt7.onrender.com/post').then(response => {
      // fetch('http://localhost:3000').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);


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
    <header>
      {/* <Link to="/" className="logo">MyBlog</Link> */}
      <nav>
        {username && (
          <>
            <Link className="createPost"  to="/create">Create new post</Link>
            <a  className="createPost" onClick={logout}>Logout ({username})</a>

            <div className="blog-post-content">
              <p>
                {posts.map(post => (<Post {...post} />))}

              </p>
            </div>


          </>
        )}
        {!username && (
          <>
return <Navigate  to = {"/login"} />

            {/* <Link to="/login">Login</Link>
            <Link to="/register">Register</Link> */}
          </>
        )}
      </nav>
    </header>
  );
}