import React from 'react';
import './Article.css';

const Article = ({ title, subtitle, image1, image2, text1, text2, quote }) => {
  return (
    <article className="article-section">
      <div className="article-header fade-in">
        <h3 className="article-subtitle">{subtitle}</h3>
        <h2 className="article-title">{title}</h2>
      </div>
      
      <div className="article-body">
        {image1 && (
          <div className="article-image primary-image fade-in">
            <img src={image1} alt={title} className="img-fluid" />
          </div>
        )}
        
        <div className="article-text fade-in">
          <p>{text1}</p>
        </div>
        
        {quote && (
          <blockquote className="article-quote fade-in">
            "{quote}"
          </blockquote>
        )}
        
        {image2 && (
          <div className="article-image secondary-image fade-in">
            <img src={image2} alt="Editorial" className="img-fluid" />
          </div>
        )}
        
        {text2 && (
          <div className="article-text fade-in">
            <p>{text2}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default Article;
