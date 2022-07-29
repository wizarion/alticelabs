import { useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchUsers() {
  return await fetch(`${API_URL}/users`)
  .then(res => res.json())
  .catch(err => Promise.reject(err));
}

export async function fetchPosts() {
  return await fetch(`${API_URL}/posts`)
  .then(res => res.json())
  .catch(err => Promise.reject(err));
}

export function createUserStructure(users, posts) {
  return users.map(user => ({
    ...user,
    posts: posts.filter(post => post.userId === user.id)
  }));
}

export default function useService() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const get = async () => {
    await Promise.all([fetchUsers(), fetchPosts()])
    .then(([users, posts]) => {
      return createUserStructure(users, posts)
    })
    .then(formattedUsers => setData(formattedUsers))
    .catch(err => console.error(err))
    .finally(() => setIsLoading(false));
  }

  return { data, isLoading, get };
}