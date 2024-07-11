/*import React from 'react';

function ArticlePage() {
  return (
    <div className="container">
      <div className="article">
        <h2>Article Title</h2>
        <img src="https://via.placeholder.com/150" alt="Article" />
        <p>Full article content goes here. This is the detailed view of the article.</p>
      </div>
    </div>
  );
}

export default ArticlePage;*/

import React from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import articles from './article-content'; // Correct import

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find(article => article.name === articleId); // Correct the find method

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div className="container">
      <div className="article">
        <h1>{article.title}</h1>
        {article.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
