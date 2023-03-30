import './Articles.css';
import React from 'react';

const Articles = () => {
    return (
        <>
             <header>
        <div className="navbar">
              <div className="left">
                    <h1>DevSpace</h1>
                    <input type="search" placeholder="Search"/>
              </div>
              <div className="links">
                    <img src="" alt="profile" />
               </div>
        </div>
      </header>


      <div className="body">

        <div className="tags">
          <a href="#">Front-End</a> 
          <a href="#">Coding</a>
          <a href="#">Software development</a>
          <a href="#">Back-end</a>  
          <a href="#">Fullstack</a>   
          <a href="#">Javascript</a>  
        </div>
        <div className="articles">
            <div className="article">
              <div className="article-profile">
                <img src="" alt="icon" />
                <h3 className='name'>Morty Smith</h3>
              </div>
              <div className="article-content">
              <h1 className='title'>Can <a href="#">ChatGPT Write Better SQL than a Data Analyst?</a></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iste alias deserunt nisi at nulla nobis laboriosam, provident autem laudantium eum optio expedita iusto libero sit saepe iure et hic!
              </p>
              </div>
              <footer>
                <p className="tag">Fullstack</p>
                <p>6 min read</p>
              </footer>
            </div>
        </div>

        <div className="articles">
            <div className="article">
              <div className="article-profile">
                <img src="" alt="icon" />
                <h3 className='name'>Morty Smith</h3>
              </div>
              <div className="article-content">
              <h1 className='title'>Can <a href="#">ChatGPT Write Better SQL than a Data Analyst?</a></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iste alias deserunt nisi at nulla nobis laboriosam, provident autem laudantium eum optio expedita iusto libero sit saepe iure et hic!
              </p>
              </div>
              <footer>
                <p className="tag">Fullstack</p>
                <p>6 min read</p>
              </footer>
            </div>
        </div>

        <div className="articles">
            <div className="article">
              <div className="article-profile">
                <img src="" alt="icon" />
                <h3 className='name'>Morty Smith</h3>
              </div>
              <div className="article-content">
              <h1 className='title'>Can <a href="#">ChatGPT Write Better SQL than a Data Analyst?</a></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iste alias deserunt nisi at nulla nobis laboriosam, provident autem laudantium eum optio expedita iusto libero sit saepe iure et hic!
              </p>
              </div>
              <footer>
                <p className="tag">Fullstack</p>
                <p>6 min read</p>
              </footer>
            </div>
        </div>

        <div className="articles">
            <div className="article">
              <div className="article-profile">
                <img src="" alt="icon" />
                <h3 className='name'>Morty Smith</h3>
              </div>
              <div className="article-content">
              <h1 className='title'>Can <a href="#">ChatGPT Write Better SQL than a Data Analyst?</a></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iste alias deserunt nisi at nulla nobis laboriosam, provident autem laudantium eum optio expedita iusto libero sit saepe iure et hic!
              </p>
              </div>
              <footer>
                <p className="tag">Fullstack</p>
                <p>6 min read</p>
              </footer>
            </div>
        </div>

      </div>

        </>
    );
}
 
export default Articles;