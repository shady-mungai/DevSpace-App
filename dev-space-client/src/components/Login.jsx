import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";




const Login = () => {
    const navigate = useNavigate()

//  const {currentUser , userLogin,signInWithGoogle,forgot} = useContext(AuthContext)

const emailRef = useRef()
const passwordRef = useRef()

const userLogin = () =>{
    fetch("http://localhost:3000/login",{
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
    body : JSON.stringify()
    })
}
// const forgotPasswordHandler = ()=>{
//     const email = emailRef.current.value
//     if(email) forgot(email).then(()=>{
//         emailRef.current.value=""
//         alert('Password reset email has been sent')
//     })
// }

    return ( 
        
       <> 
        <div className="loginPage">
            <div className="containerone">
            <div className="form">
                <h1>LOGIN </h1>
                <div className="lines">
                    <div className="lineone"></div>
                    <p>Sign in with email</p>
                    <div className="line"></div>
                </div>
               
                <form onSubmit={(e)=>{
                    e.preventDefault()
                        userLogin()
                        navigate("/")
                    }}>
                   <div className="div"><p>Email*</p></div> 
                    <div className="emailplace"><input ref={emailRef} type="email" placeholder="johndoe@gmail.com" required /></div>
                
                
                    <div className="div"><p>Password*</p></div>
                    <div className="passplace"><input ref={passwordRef} type="password" placeholder="Input password" required/></div>
                
                <div className="forgot">
                    <p>Forgot password?</p>
                </div>
                <div className="loginBtn">
                    <input type='submit'value='login'/>
                </div>
                </form>
                <div className="notregisterd">
                    <p>Not registered yet?</p>
                   <Link to='/SignUp'>Create an Account</Link>
                </div>
            </div>
            </div>
        </div>

        

       </>

     );
}
 
export default Login;