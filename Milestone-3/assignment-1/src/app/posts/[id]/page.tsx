'use client';

import { useState } from 'react';
import { posts } from '@/app/data/post';
import { useParams } from 'next/navigation';

const PostPage = () => {
    const { id } = useParams(); // Access the route parameter
    const post = posts.find((p) => p.id.toString() === id); // Ensure id comparison is correct

    const [comments, setComments] = useState<string[]>([]);
    const [comment, setComment] = useState('');

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (comment) {
            setComments((prevComments) => [...prevComments, comment]);
            setComment('');
        }
    };

    if (!post) return <p className="text-center text-lg">Loading...</p>; // Handle loading state

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <h1 className="text-3xl font-bold mb-4 text-black">{post.title}</h1>
                <p className="text-gray-700 mb-4">{post.content}</p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <form onSubmit={handleCommentSubmit} className="mb-6 text-black">
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment..."
                    required
                    className="w-full h-20 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Submit
                </button>
            </form>

            <ul className="space-y-2">
                {comments.length === 0 ? (
                    <li className="text-gray-500 italic">No comments yet. Be the first to comment!</li>
                ) : (
                    comments.map((c, index) => (
                        <li key={index} className="p-4 border-b text-black border-gray-200 bg-gray-50 rounded">
                            {c}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default PostPage;
