import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from '../api/blogPosts';
import BlogPost from './BlogPost';
import Pagination from './Pagination';

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchBlogPosts(currentPage).then((data) => {
      setBlogPosts(data);
      setIsLoading(false);
    });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && blogPosts.map((blogPost) => (
        <div key={blogPost.id}>
          <BlogPost {...blogPost} />
          <Link to={`/posts/${blogPost.id}/update`}>Update</Link>
          <Link to={`/posts/${blogPost.id}/delete`}>Delete</Link>
        </div>
      ))}
      {!isLoading && <Pagination currentPage={currentPage} handlePageChange={handlePageChange} />}
    </div>
  );
};

export default BlogList;
