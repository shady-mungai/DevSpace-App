import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"

const HomePage = () => {
    return (
        <>
        <div className="home">
        <div className="container main">
            <div className="nav">
                <h1>DevSpace</h1>
                <div className="links">
                    <Link to="/SignUp">Sign up</Link>
                </div>
            </div>
            <div className="main-content">
                <h1>Publish Your Own Code Solutions</h1>
                <Link to="/SignUp">Create Solution</Link>
            </div>
        </div>

        <div className="container2">
            <div className="about-img">
                <img src={require('./assets/about.jpg')}/>
            </div>
            <div className="about-text">
                <h1>About Us</h1>
                <p>
                Devspace is an application that provides a platform for developers to share and discover technical articles, tutorials, and code snippets. With Devspace, developers can create their own profiles, publish articles, and engage with a community of like-minded developers.
                </p>

                <p>
                The application is designed to promote knowledge sharing and collaboration among developers of all skill levels. By allowing developers to easily publish and find high-quality technical content, Devspace aims to make learning and building software more accessible and efficient.
                </p>
            </div>
        </div>

        <div className="container3">
            <div className="why-title">
                <h1>Why Choose Us?</h1>
            </div>
            
            <div className="cards">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <h1>Design</h1>
                            <img src={require('./assets/about.jpg')}/>
                            
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Minima 
                                tempore explicabo 
                                repudiandae eos porr
                            </p>
                            <Link to="/">Read More</Link>
                        </div>
                    </div>
                </div>
        
        
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <h1>Design</h1>
                            <img src={require('./assets/about.jpg')}/>
                            
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Minima 
                                tempore explicabo 
                                repudiandae eos porr
                            </p>
                            <Link to="/">Read More</Link>
                        </div>
                    </div>
                </div>
        
        
        
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <h1>Design</h1>
                            <img src={require('./assets/about.jpg')}/>
                            
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Minima 
                                tempore explicabo 
                                repudiandae eos porr
                            </p>
                            <Link to="/">Read More</Link>
                        </div>
                    </div>
                </div>
        
        
            </div>
        </div>
    </div>
        
        </>
    );
}
 
export default HomePage;