import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Login.css"
import anime from "./anime.jpg"

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);
    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('https://blog-backend-tvt7.onrender.com/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
        } else {
            alert('wrong credentials');
        }
    }

    if (redirect) {
        return <Navigate to={'/header'} />
    }

    return (
        <>
            <div className='loginPage' >
                <div className="loginHome">
                    <div className="navbarLogin">
                        <ul>
                            {/* <Link to="/create" style={{ textDecoration: "none" }}   >  <li className='blog'>Blog</li> </Link> */}

                            <Link to="/register" style={{ textDecoration: "none" }}  >  <li className='signUpList'>SignUp</li> </Link>
                            <Link to="/login" style={{ textDecoration: "none" }}  >   <li className='login' >Login</li> </Link>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="registerLogin">
                <div className="animeImage">

                    <img className="anime" src={anime} alt="" />
                </div>

                <div className="loginInputs">
                    <input type="text"
                        className="email"
                        placeholder="Email"
                        value={username}
                        onChange={ev => setUsername(ev.target.value)} />

                    <input
                        type="password"
                        className="password"
                        placeholder="Password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />
                </div>


                <div className="login">

                    <button className="loginButton" onClick={login}>Login </button>
                    {/* <button className="loginButton" >Login </button> */}
                </div>

            </div>
        </>
    )
}



