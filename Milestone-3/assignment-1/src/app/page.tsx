import Link from 'next/link';
import { posts } from '@/app/data/post';

const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">My Blog</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <Link href={`/posts/${post.id}`} className="block p-6">
              <h2 className="text-xl font-semibold text-black mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.excerpt || "Read more..."}</p>
              <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">Add Post</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
