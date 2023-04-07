
import { useState } from "react";
import "./SignUp.css"

import { Link } from "react-router-dom";
import image from "./image.jpg"

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('https://blog-backend-tvt7.onrender.com/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }
  return (
    <>

      <div className='signUpPage' >
        <div className="signUpHome">
          <div className="navbarSignUp">
            <ul>
              {/* <Link to="/create" style={{ textDecoration: "none" }}   >  <li className='blog'>Blog</li> </Link> */}

              <Link to="/register" style={{ textDecoration: "none" }}  >  <li className='signUpList'>SignUp</li> </Link>
              <Link to="/login" style={{ textDecoration: "none" }}  >   <li className='login' >Login</li> </Link>
            </ul>
          </div>

        </div>
      </div>


      <div className="register">

        <div className="signUpImage">

          <img className="image" src={image} alt="" />
        </div>
        <div className="signUpInputs">
          
          <input className="email" type="text" name="email" placeholder="Your Email" value={username}
             onChange={ev => setUsername(ev.target.value)}/>
          <input className="password" type="password" name="password" placeholder="Your Password" value={password}
             onChange={ev => setPassword(ev.target.value)}/>
        </div>
        <div className="signUp">

          <button className="signUpButton" onClick={register}>SignUp</button>

        </div>

      </div>
    </>
  );
};

