import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteBlogPost } from '../api/blogPosts';

const DeleteBlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteBlogPost(id);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p>Are you sure you want to delete this post?</p>
      <button onClick={handleDelete}>Yes, delete</button>
    </div>
  );
};

export default DeleteBlogPost;
