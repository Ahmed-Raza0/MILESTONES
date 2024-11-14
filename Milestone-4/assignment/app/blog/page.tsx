 'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import supabase from '@/utils/supabase/supabase';

export default function Blog() {
  const [posts, setPosts] = useState<any[] | null>([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase.from('posts').select('*');
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog</h1>
      <div className="text-center mb-6">
        <Link href="/blog/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create New Post
        </Link>
      </div>
      {posts && posts.length > 0 ? (
  posts.map((post) => (
    <li key={post.id} className="border p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
        Edit
      </Link>
    </li>
  ))
) : (
  <p>No posts available.</p>
)}

    </div>
  );
}
