import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { updateBlogPost, fetchBlogPost } from '../api/blogPosts';

const schema = yup.object({
  title: yup.string().required('Title is required'),
  body: yup.string().required('Body is required'),
});

const UpdateBlogPost = () => {
  const { id } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm({
    validationSchema: schema,
  });
  const [blogPost, setBlogPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogPost(id).then((data) => setBlogPost(data));
  }, [id]);

  const onSubmit = async (data) => {
    try {
      await updateBlogPost(id, data);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return blogPost ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Title"
        {...register('title', { required: true })}
        defaultValue={blogPost.title}
      />
      {errors.title && <p className="error">{errors.title.message}</p>}

      <textarea
        placeholder="Body"
        {...register('body', { required: true })}
        defaultValue={blogPost.body}
      />
      {errors.body && <p className="error">{errors.body.message}</p>}

      <button type="submit">Update Post</button>
    </form>
  ) : (
    <p>Loading...</p>
  );
};

export default UpdateBlogPost;
