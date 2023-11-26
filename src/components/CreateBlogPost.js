import React from 'react';
import * as yup from 'yup'; 
import { useForm } from 'react-hook-form';
import { createBlogPost } from '../api/blogPosts';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  title: yup.string().required(),
  body: yup.string().required(),
});

const CreateBlogPost = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    validationSchema: schema,
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await createBlogPost(data);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Title"
        {...register('title', { required: true })}
      />
      {errors.title && <p className="error">{errors.title.message}</p>}

      <textarea
        placeholder="Body"
        {...register('body', { required: true })}
      />
      {errors.body && <p className="error">{errors.body.message}</p>}

      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreateBlogPost;
