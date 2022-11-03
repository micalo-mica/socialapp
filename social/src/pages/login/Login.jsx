import "./login.css"
import {useContext, useRef} from "react"
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext)

    const handleClick = (e)=>{
        e.preventDefault();
        loginCall({email,password},)
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Micahsocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Micahsocial
                        </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" className="loginInput" required ref={email}/>
                        <input placeholder="password" type="password" className="loginInput" minLength="6" required ref={password}/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
