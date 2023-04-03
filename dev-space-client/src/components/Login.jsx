import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  
  useEffect(()=>{
    fetch('http://localhost:3300/users')
    .then((res)=>res.json())
    .then((data)=>{
      setUsers(data)
      console.log(data)
    })
  },[])

  const userLogin = async () => {
    const email = emailRef.current.value;
    const user =  users.filter((user)=> user.email === email )
    if(user.length) {
    localStorage.setItem('email',user[0].email)
    localStorage.setItem('id', user[0].id)
    localStorage.setItem('username', user[0].username)
    const response = await fetch('http://localhost:3300/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
    });

    if (response.ok) {
          fetch('http://localhost:3300/users')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            let user = data.filter(
              (user)=> user.email=== emailRef.current.value
            )
            setUsers(user);
            console.log(user)
            
          })
          .catch(error => {
            console.error('Error:', error);
          });




       navigate('/Articles');
    } else {
      // Login failed, display error message
      const error = await response.json();
      alert(error.message);
    }
    }else{
      alert("invalid email or password")
    }
  };

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
            <form onSubmit={(e) => {
              e.preventDefault();
              userLogin();
            }}>
              <div className="div"><p>Email*</p></div>
              <div className="emailplace"><input ref={emailRef} type="email" placeholder="johndoe@gmail.com" required /></div>
              <div className="div"><p>Password*</p></div>
              <div className="passplace"><input ref={passwordRef} type="password" placeholder="Input password" required /></div>
              <div className="forgot">
                <p>Forgot password?</p>
              </div>
              <div className="loginBtn">
                <input type='submit' value='login' />
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
};

export default Login;