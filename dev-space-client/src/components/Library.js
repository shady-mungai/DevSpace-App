import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Library.css'
import React, { useState, useEffect } from "react";
let userId = localStorage.getItem('id')
const Library = () => {
  const [articles, setArticles] = useState([]);
  const [editorValue, setEditorValue] = useState('');
  const [title, setTitle] = useState("");
;


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
        title: title,
        content: editorValue,
        user_id: userId
        
        
      })
    });
    if (response.ok) {
      const data = await response.json();
      setArticles([...articles, data]);
      setEditorValue('');
      setTitle('');
     
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
          return { ...data, content: data.content.replace(/<\/?p>/g,'') };
        } else {
          return article;
        }
      });
      setArticles(updatedArticles);
      setEditorValue('');
      setTitle('');
     
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
      setTitle('');
      
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
      <input type="text" placeholder="Enter article title" className='art-title' value={title}  onChange={(e) => setTitle(e.target.value)} />
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
                    <button className="update-btn" onClick={() => handleUpdateArticle(article.id)}>Update</button>
                    <button className="delete-btn" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
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