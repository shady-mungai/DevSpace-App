import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Library = () => {
  const [editorValue, setEditorValue] = useState({title: '', topicLanguage: '', content: ''});
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const response = await fetch('http://localhost:3300/articles');
  //     const data = await response.json();
  //     setArticles(data);
  //   };

  //   fetchArticles();
  // }, []);

  const handleNewArticle = async () => {
    const response = await fetch('http://localhost:3300/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: editorValue.title,
        topicLanguage: editorValue.topicLanguage,
        content: editorValue.content
      })
    });

    if (response.ok) {
      const data = await response.json();
      setArticles([...articles, data]);
      console.log(data)
      setEditorValue({title: '', topicLanguage: '', content: ''});
    } else {
      console.log('Error creating article');
    }
  };

  const handleDeleteArticle = async (id) => {
    const response = await fetch(`http://localhost:3300/articles/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      const newArticles = articles.filter((article) => article.id !== id);
      setArticles(newArticles);
    } else {
      console.log('Error deleting article');
    }
  };

  const handleEditArticle = async (id) => {
    const articleToEdit = articles.find((article) => article.id === id);
    const newContent = prompt('Enter new content:', articleToEdit.content);

    if (newContent) {
      const response = await fetch(`http://localhost:3300/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: newContent
        })
      });

      if (response.ok) {
        const newArticles = articles.map((article) => {
          if (article.id === id) {
            return {
              ...article,
              content: newContent
            };
          } else {
            return article;
          }
        });

        setArticles(newArticles);
      } else {
        console.log('Error editing article');
      }
    }
  };

  return (
    <div>
      <h1>Library</h1>
      <div>
        <input type="text" placeholder="Title" value={editorValue.title} onChange={(e) => setEditorValue({...editorValue, title: e.target.value})} />
        <input type="text" placeholder="Topic/Language" value={editorValue.topicLanguage} onChange={(e) => setEditorValue({...editorValue, topicLanguage: e.target.value})} />
        <ReactQuill value={editorValue.content} onChange={(value) => setEditorValue({...editorValue, content: value})} />
        <button onClick={handleNewArticle}>Create Article</button>
      </div>
      {articles.length > 0 ? (
        <div>
          {articles.map((article) => (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.topicLanguage}</p>
              <div>{article.content && JSON.parse(article.content)}</div>
              <button onClick={() => handleEditArticle(article.id)}>Edit</button>
              <button onClick={() => handleDeleteArticle(article.id)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No articles yet. Create one!</p>
      )}
    </div>
  );
};

export default Library;