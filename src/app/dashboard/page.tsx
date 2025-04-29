'use client';

import Link from 'next/link';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import AnimatedButton from '@/components/animations/AnimatedButton';

export default function DashboardPage() {
  const mockData = {
    stats: {
      totalSubscribers: 45,
      monthlyEarnings: 325.50,
      totalPosts: 28,
      engagement: "87%"
    },
    recentPosts: [
      {
        title: "My Creative Process",
        date: "2025-04-28",
        likes: 156,
        comments: 23
      },
      {
        title: "Behind the Scenes",
        date: "2025-04-25",
        likes: 142,
        comments: 18
      },
      {
        title: "Monthly Update",
        date: "2025-04-22",
        likes: 198,
        comments: 34
      }
    ],
    topSubscribers: [
      { name: "John D.", tier: "Gold", since: "March 2025" },
      { name: "Sarah M.", tier: "Gold", since: "February 2025" },
      { name: "Mike R.", tier: "Silver", since: "April 2025" }
    ]
  };

  return (
    <PageTransition>
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <FadeIn>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Creator Dashboard</h1>
            <Link href="/post/create">
              <AnimatedButton>Create New Post</AnimatedButton>
            </Link>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Total Subscribers</h3>
              <p className="text-2xl font-bold mt-2">{mockData.stats.totalSubscribers}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Monthly Earnings</h3>
              <p className="text-2xl font-bold mt-2">${mockData.stats.monthlyEarnings}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Total Posts</h3>
              <p className="text-2xl font-bold mt-2">{mockData.stats.totalPosts}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Engagement Rate</h3>
              <p className="text-2xl font-bold mt-2">{mockData.stats.engagement}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
              <div className="space-y-4">
                {mockData.recentPosts.map((post, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{post.title}</h3>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="mr-4">❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/posts">
                  <AnimatedButton variant="outline">View All Posts</AnimatedButton>
                </Link>
              </div>
            </div>

            {/* Top Subscribers */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Top Subscribers</h2>
              <div className="space-y-4">
                {mockData.topSubscribers.map((sub, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{sub.name}</h3>
                      <p className="text-sm text-gray-500">{sub.tier} • Since {sub.since}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/subscribers">
                  <AnimatedButton variant="outline">View All Subscribers</AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
