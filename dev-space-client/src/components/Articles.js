import "./Articles.css";
import React, { useState, useEffect, useContext } from 'react';
import {  Link } from 'react-router-dom';
import AuthContext from "./AuthContext/AuthContext";
import Profile from "./Profile";


const Articles = () => {

  const {currentUser} = useContext(AuthContext)
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('http://localhost:3300/articles?_embed=tags');
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
        console.log(data)
      } else {
        console.error('Failed to fetch articles:', response.status);
      }
    };
    fetchArticles();
  }, []);
  const filteredArticles = articles.filter((article) => {
    const titleMatch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    const tagMatch = article.tags.some((tag) => tag.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const contentMatch = article.content && JSON.parse(article.content).some((content) => content.toLowerCase().includes(searchQuery.toLowerCase()));
    return titleMatch || tagMatch || contentMatch ;
  });

 useEffect(()=>{
    console.log(currentUser)
 },[currentUser])

  return (
    <div className="Homepage">
      <header>
        <div className="navbar">
          <div className="left">
            <h1>DevSpace {currentUser && currentUser.id}</h1>
            <input type="search" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

          </div>
          <div className="links">

            <Profile />
          </div>
        </div>
      </header>
      <div className="main-body">
        <div className="tags">
          <a href="#">Front-End</a>
          <a href="#">Coding</a>
          <a href="#">Software development</a>
          <a href="#">Back-end</a>
          <a href="#">Fullstack</a>
          <a href="#">Javascript</a>
        </div>
        
        <div className="articles">
          {filteredArticles.map((article) => (
            <div className="article" key={article.id}>
              <div className="article-profile">
                <img src="" alt="icon" />
                <h3 className="name">{article.user.username}</h3>
                
              </div>
              <div className="article-content">
                <h1 className="title">
                  <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </h1>
                <p className="content">
                {article.content && JSON.parse(article.content)}
                  </p>
              </div>
              <footer>
                <div className="tags-container">
                  {article.tags.map((tag) => (
                    <p className="tag" key={tag.id}>{tag.name}</p>
                  ))}
                </div>
                <p>6 min read</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;