import "./Articles.css";
import React, { useState, useEffect } from 'react';
import {  Link } from 'react-router-dom';
import Profile from "./Profile";

let userId = localStorage.getItem('id')
const Articles = () => {

  
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
    const contentMatch = article.content.toLowerCase().includes(searchQuery.toLowerCase());
    const tagMatch = article.tags.some((tag) => tag.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return titleMatch || tagMatch || contentMatch;
  });

  const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substr(0, maxLength) + '...';
    } else {
      return str;
    }
  };
 useEffect(()=>{
    console.log(userId)
 },[])

  return (
    <div className="Homepage">
      <header>
        <div className="navbar">
          <div className="left">
            <h1>DevSpace</h1>
            <input type="search" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

          </div>
          <div className="links">

            <Profile />
          </div>
        </div>
      </header>
      <div className="main-body">
        <div className="tags">
          <Link to='/Articles'>Front-End</Link>
          <Link to='/Articles'>Coding</Link>
          <Link to='/Articles'>Software development</Link>
          <Link to='/Articles'>Back-end</Link>
          <Link to='/Articles'>Fullstack</Link>
          <Link to='/Articles'>Javascript</Link>
        </div>
        
        <div className="articles">
          {filteredArticles.map((article) => (
            <div className="article" key={article.id}>
              <div className="article-profile">
                
                <h3 className="name">{article.user.username}</h3>
                
              </div>
              <div className="article-content">
                <h1 className="title">
                  <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </h1>
                <p className="content">
                <div dangerouslySetInnerHTML={{ __html: truncate(article.content, 150) }}></div>
                  </p>

              <p>
                {article.id === userId ? 'Mine' : ''}
              </p>

              </div>
              <footer>
                <div className="tags-container">
                  {article.tags.map((tag) => (
                    <p className="tag" key={tag.id}>{tag.name}</p>
                  ))}
                
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;