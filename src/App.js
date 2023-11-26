import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BlogList from './components/BlogList';
import CreateBlogPost from './components/CreateBlogPost';
import UpdateBlogPost from './components/UpdateBlogPost';
import DeleteBlogPost from './components/DeleteBlogPost';
import './App.css'

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<CreateBlogPost />} />
        <Route path="/posts/:id/update" element={<UpdateBlogPost />} />
        <Route path="/posts/:id/delete" element={<DeleteBlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;
