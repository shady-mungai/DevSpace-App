import React, { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Library.css'


const Library = () => {
  const [articles, setArticles] = useState([]);
  const [editorValue, setEditorValue] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('http://localhost:3300/articles');
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      } else {
        console.log('Error fetching articles');
      }
    }
    fetchArticles();
  }, []);

  const handleNewArticle = async () => {
    const response = await fetch('http://localhost:3300/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'New Article',
        content: editorValue
      })
    });
    if (response.ok) {
      const data = await response.json();
      setArticles([...articles, data]);
      setEditorValue('');
    } else {
      console.log('Error creating article');
    }
  }

  const handleUpdateArticle = async (articleId) => {
    const response = await fetch(`http://localhost:3300/articles/${articleId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: editorValue
      })
    });
    if (response.ok) {
      const data = await response.json();
      const updatedArticles = articles.map((article) => {
        if (article.id === data.id) {
          return data;
        } else {
          return article;
        }
      });
      setArticles(updatedArticles);
      setEditorValue('');
    } else {
      console.log('Error updating article');
    }
  }

  const handleDeleteArticle = async (articleId) => {
    const response = await fetch(`http://localhost:3300/articles/${articleId}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      const updatedArticles = articles.filter((article) => article.id !== articleId);
      setArticles(updatedArticles);
      setEditorValue('');
    } else {
      console.log('Error deleting article');
    }
  }

  return (
    <div className="publish-article">
      <div className="write-article">
      <div className="card-header">
        <h3>Your Articles</h3>
        <button className="new-art-btn" onClick={handleNewArticle}>Add Article</button>
      </div>
      <div className="card-body">
        <ReactQuill className="quill" value={editorValue} onChange={setEditorValue} />
        {articles.length > 0 ? (
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <div className="card">
                  <div className="card-header">
                    <h4>{article.title}</h4>
                  </div>
                  <div className="card-body">
                    <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
                    <button className="btn btn-primary" onClick={() => handleUpdateArticle(article.id)}>Update</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="nb">
            <div className="footer-body">
              <p>Create an article to easily organize and share stories.</p>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Library;