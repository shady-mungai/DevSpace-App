import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordRef2 = useRef();
  const usernameRef = useRef();

  const userSignup = async () => {
    const response = await fetch('http://localhost:3300/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        username: usernameRef.current.value
      })
    });

    if (response.ok) {
      // User is signed up, navigate to home page
      navigate('/Articles');
    } else {
      // Signup failed, display error message
      const error = await response.json();
      alert(error.message);
    }
  };

  return (
    <>
      <div className="parent">
        <div className="container1">
          <div className="form2">
            <h2>SIGN UP</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              // Check if passwords match
              if (passwordRef.current.value === passwordRef2.current.value) {
                userSignup();
              } else {
                alert('Passwords Mismatch. Please input the same password.');
              }
            }}>
              <div style={{ display: 'flex', marginBottom: '.7rem' }}><p>UserName*</p></div>
              <div className='username'><input ref={usernameRef} type="text" placeholder="johndoe" required /></div>
              <div style={{ display: 'flex', marginTop: '.5rem', marginBottom: '.7rem' }}><p>Email*</p></div>
              <div className="emailInput"><input ref={emailRef} type="email" placeholder="johndoe@gmail.com" required /></div>
              <div style={{ display: 'flex', marginTop: '.5rem', marginBottom: '.7rem' }}><p>Password*</p></div>
              <div className="passwordInput"><input ref={passwordRef} type="password" placeholder="Input password" required /></div>
              <div style={{ display: 'flex', marginTop: '.5rem', marginBottom: '.7rem' }}><p>Confirm Password*</p></div>
              <div className="confirmInput"><input ref={passwordRef2} type="password" placeholder="Confirm password" required /></div>
              <div className="signbtn">
                <input type='submit' value='Create account' />
              </div>
            </form>
            <div className="alreadyRegistered">
              <p>Already have an account?</p>
              <Link to='/Login'>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;