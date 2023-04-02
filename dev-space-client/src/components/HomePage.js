import React, { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import "./Homepage.css"

const HomePage = () => {
    const [articles, setArticles] = useState([]);
    const [text] = useTypewriter({
        words: ["The Best Space For Developers.", "Full Support From Other Articles.", "Best Information In The Industry."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
    useEffect(() => {
        fetch('http://localhost:3300/articles')
          .then(response => response.json())
          .then(data => {
            setArticles(data.slice(1, 4)); 
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
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
                <h2 className="type">
                    With <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="lightgray"
                    />
                </h2>
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ut obcaecati aliquam dicta nam nesciunt ab. Voluptas nam, autem inventore sapiente earum facere quos ab numquam, dolor tenetur esse et.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ut obcaecati aliquam dicta nam nesciunt ab. Voluptas nam, autem inventore sapiente earum facere quos ab numquam, dolor tenetur esse et.
                </p>
            </div>
        </div>

        <div className="container3">
            <div className="why-title">
                <h1>Why Choose Us?</h1>
            </div>
            
            <div className="cards">
                {
                    articles.map((article)=>(
                        <>
                    <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <h1>Know more...</h1>
                            <img src={require('./assets/about.jpg')}/>
                            
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>
                                {article.title}
                            </p>
                            <Link to={`/articles/${article.id}`}>Read More</Link>
                        </div>
                    </div>
                </div>
        
        
               
        
        
        
                
                        </>
                    ))
                }
                
        
            </div>
        </div>
    </div>
        
        </>
    );
}
 
export default HomePage;