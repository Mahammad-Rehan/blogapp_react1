const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchBlogPosts = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}?_page=${page}`);
    return response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

export const createBlogPost = async (formData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    alert(`Blog post with ID ${data.id} has been created`);
    return data;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

export const updateBlogPost = async (id, formData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    alert(`Blog post with ID ${data.id} has been updated`);
    return data;
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

export const deleteBlogPost = async (id) => {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    alert(`Blog post with ID ${id} has been deleted`);
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};

export const fetchBlogPost = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
};
