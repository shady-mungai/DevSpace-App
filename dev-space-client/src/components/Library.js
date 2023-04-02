import React, { useState, useEffect } from "react";

const Library = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('http://localhost:3000/articles');
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      } else {
        console.log('Error fetching articles');
      }
    }
    fetchArticles();
  }, []);

  const handleNewArticle = () => {
    // handle creating a new article
  }

  const handleUpdateArticle = (articleId) => {
    // handle updating the article with the given ID
  }

  const handleDeleteArticle = (articleId) => {
    // handle deleting the article with the given ID
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>Your Articles</h3>
        <button className="btn btn-primary" onClick={handleNewArticle}>New Article</button>
      </div>
      <div className="card-body">
        {articles.length > 0 ? (
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <div className="card">
                  <div className="card-header">
                    <h4>{article.title}</h4>
                  </div>
                  <div className="card-body">
                    <p>{article.summary}</p>
                    <button className="btn btn-primary" onClick={() => handleUpdateArticle(article.id)}>Update</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="card">
            <div className="card-body">
              <p>Create an article to easily organize and share stories.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Library;