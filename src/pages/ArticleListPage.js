/*import React from 'react';

function ArticleListPage() {
  return (
    <div className="container">
      <div className="article-list">
        <div className="article">
          <h2>Article Title 1</h2>
          <img src="https://via.placeholder.com/150" alt="Article" />
          <p>Article content goes here. This is a brief description of the article.</p>
          <a href="#readmore" className="read-more">Read More</a>
        </div>
        {/* Add more articles here */
/*      </div>
    </div>
  );
}

export default ArticleListPage;
*/ 
import React from 'react';
import { Link } from 'react-router-dom';
import articles from './article-content';

const ArticleListPage = () => {
  return (
    <div className="container">
      <h1>Articles</h1>
      <div className="article-list">
        {articles.map(article => (
          <Link key={article.name} className="article-list-item" to={`/article/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleListPage;
