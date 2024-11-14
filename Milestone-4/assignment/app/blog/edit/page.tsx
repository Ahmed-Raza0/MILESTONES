 // app/blog/[id]/edit/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditBlog({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState("Sample Title"); // Fetch the actual data based on `id`
  const [content, setContent] = useState("Sample Content");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Update the blog post logic here
    console.log("Updated Title:", title);
    console.log("Updated Content:", content);

    // After saving, redirect or show success message
    router.push("/blog");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-lg font-medium text-gray-900">Blog Title</label>
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
          <label className="block mb-2 text-lg font-medium text-gray-900">Content</label>
          <textarea
  title="Enter the content of the blog post"
  className="w-full p-2 border border-gray-300 rounded-md"
  rows={6}
  value={content}
  onChange={(e) => setContent(e.target.value)}
  required
></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}
