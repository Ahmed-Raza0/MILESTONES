 // app/blog/page.tsx

"use client"; // Since you're using hooks like useState

import { useState } from "react";

// Mock blog posts
const mockBlogPosts = [
  { id: 1, title: "First Blog Post", content: "This is the content of the first post." },
  { id: 2, title: "Second Blog Post", content: "This is the content of the second post." },
];export default function BlogList() {
  const [blogs, setBlogs] = useState(mockBlogPosts);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      {blogs.length === 0 ? (
        <p className="text-gray-600">No posts available yet.</p>
      ) : (
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog.id} className="p-4 border border-gray-300 rounded-md">
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
