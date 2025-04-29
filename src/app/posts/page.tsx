'use client';

import Link from 'next/link';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import AnimatedButton from '@/components/animations/AnimatedButton';

export default function PostsPage() {
  const mockPosts = [
    {
      id: 1,
      title: "My Creative Process",
      excerpt: "In this post, I'll share my step-by-step creative process and the tools I use...",
      date: "2025-04-28",
      likes: 156,
      comments: 23,
      tier: "Public"
    },
    {
      id: 2,
      title: "Behind the Scenes",
      excerpt: "Take a look at how I set up my workspace and organize my daily schedule...",
      date: "2025-04-25",
      likes: 142,
      comments: 18,
      tier: "Silver+"
    },
    {
      id: 3,
      title: "Monthly Update",
      excerpt: "Here's what I've been working on this month and what's coming next...",
      date: "2025-04-22",
      likes: 198,
      comments: 34,
      tier: "Public"
    },
    {
      id: 4,
      title: "Advanced Tutorial Series",
      excerpt: "Part 1 of my new advanced tutorial series covering professional techniques...",
      date: "2025-04-20",
      likes: 245,
      comments: 56,
      tier: "Gold"
    },
    {
      id: 5,
      title: "Q&A Session Highlights",
      excerpt: "Answering your most asked questions about my creative journey...",
      date: "2025-04-18",
      likes: 167,
      comments: 45,
      tier: "Public"
    },
    {
      id: 6,
      title: "Exclusive Content Preview",
      excerpt: "A sneak peek at what's coming up next month...",
      date: "2025-04-15",
      likes: 134,
      comments: 28,
      tier: "Silver+"
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <FadeIn>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">All Posts</h1>
            <Link href="/post/create">
              <AnimatedButton>Create New Post</AnimatedButton>
            </Link>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-4">
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white">
              <option value="all">All Tiers</option>
              <option value="public">Public</option>
              <option value="silver">Silver+</option>
              <option value="gold">Gold Only</option>
            </select>

            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 gap-6">
            {mockPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-3">{post.excerpt}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    post.tier === 'Public' ? 'bg-green-100 text-green-800' :
                    post.tier === 'Silver+' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {post.tier}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-md bg-black text-white">
                1
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
