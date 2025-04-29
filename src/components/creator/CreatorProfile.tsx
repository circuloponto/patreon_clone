'use client';

import { Heart, Share2, MessageCircle } from 'lucide-react';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import AnimatedButton from '@/components/animations/AnimatedButton';

interface Creator {
  id: string;
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
  coverUrl: string;
  stats: {
    followers: number;
    posts: number;
    joined: string;
  };
}

interface Tier {
  name: string;
  price: number;
  benefits: string[];
}

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  likes: number;
  comments: number;
}

interface CreatorProfileProps {
  creator: Creator;
  tiers: Tier[];
  posts: Post[];
}

export default function CreatorProfile({ creator, tiers, posts }: CreatorProfileProps) {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        {/* Cover Image */}
        <div className="h-64 bg-gray-300 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 -mt-16 relative z-10">
          <FadeIn>
            {/* Creator Profile */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg">
                  <div className="w-full h-full bg-gray-300" />
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">{creator.name}</h1>
                  <p className="text-gray-600 mb-2">{creator.handle}</p>
                  <p className="text-gray-800 mb-4 max-w-2xl">
                    {creator.bio}
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4">
                    <div>
                      <span className="font-bold text-xl">{creator.stats.followers.toLocaleString()}</span>
                      <span className="text-gray-600 ml-1">followers</span>
                    </div>
                    <div>
                      <span className="font-bold text-xl">{creator.stats.posts}</span>
                      <span className="text-gray-600 ml-1">posts</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Joined </span>
                      <span className="font-bold">{creator.stats.joined}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <AnimatedButton variant="primary">
                      Follow
                    </AnimatedButton>
                    <AnimatedButton variant="outline">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Message
                    </AnimatedButton>
                    <AnimatedButton variant="outline">
                      <Share2 className="w-5 h-5 mr-2" />
                      Share
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="text-2xl font-bold mb-4">
                    ${tier.price}
                    <span className="text-lg font-normal text-gray-600">/mo</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-600">
                        <Heart className="w-5 h-5 text-pink-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <AnimatedButton variant="primary" fullWidth>
                    Join {tier.name} Tier
                  </AnimatedButton>
                </div>
              ))}
            </div>

            {/* Recent Posts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {post.likes}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </span>
                        </div>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
