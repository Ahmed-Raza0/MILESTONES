'use client';

import { useEffect, useState } from "react";
import  supabase  from "@/utils/supabase/supabase";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  content: string;
}
export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data, error } = await supabase.from("blogs").select();
    if (error) console.error("Error fetching blogs:", error);
    else setBlogs(data);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Blog List</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 border rounded shadow-sm">
            <Link href={`/blog/${blog.id}`}>
              <h2 className="text-xl font-bold cursor-pointer">{blog.title}</h2>
            </Link>
            <p className="text-gray-600">{blog.content.slice(0, 100)}...</p>
            <Link href={`/blog/edit/${blog.id}`} className="text-blue-500 mt-2">
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
