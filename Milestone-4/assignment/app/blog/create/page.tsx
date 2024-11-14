 'use client';
import { useSession } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/utils/supabase/supabase';

export default function CreatePost() {
  const session: any = useSession();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  console.log('Session:', session);

  if (session) {
    return <p className="text-red-500 text-center mt-4">Please sign in to create a post.</p>;
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      await supabase.from('posts').insert([
        {
          title,
          content,
          author_id: session.user.id,
        },
      ]);

      router.push('/blog');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Create Post</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
