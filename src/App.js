import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import AddArticlePage from './pages/AddArticlePage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My React Blog</h1>
        </header>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/articles">Articles</a>
          <a href="/add-article">Add Article</a>
        </nav>
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/add-article" element={<AddArticlePage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 My React Blog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
