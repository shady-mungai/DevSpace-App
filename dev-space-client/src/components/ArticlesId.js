import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ArticlesId.css'

const ArticlesId = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`http://localhost:3300/articles/${id}`);
      const data = await response.json();
      setArticle(data);
      setReviews(data.reviews);
    };
    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="full-articles">
  <div className="full-article">
      <div className="article-profile">
        <h3 className="name">{article.user.username}</h3>
      </div>
      <div className="article-content">
        <h1 className="title">{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
      <footer>
        <p className="tag">{article.tags[0].name}</p>
      </footer>
      <div className="reviews">
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ArticlesId;