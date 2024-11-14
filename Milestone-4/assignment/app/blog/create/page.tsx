

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

 
    const blogPost = { title, content };
    console.log(blogPost);

    // Redirect or show success message after submission
    router.push("/blog");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-lg font-medium text-gray-900">
            Blog Title
          </label>
          <input
  type="text"
  className="w-full p-2 border border-gray-300 rounded-md"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  required
  title="Enter the title of the blog post" // Add a title attribute
/>
        </div>
        <div>
          <label className="block mb-2 text-lg font-medium text-gray-900">
            Content
          </label>
          <textarea
  className="w-full p-2 border border-gray-300 rounded-md"
  rows={6}
  value={content}
  onChange={(e) => setContent(e.target.value)}
  required
  title="Enter the content of the blog post"
  placeholder="Type your blog post content here..."
></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
