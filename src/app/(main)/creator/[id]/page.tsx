'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock creator data
const MOCK_CREATORS = {
  '1': {
    id: 1,
    name: 'Sarah Johnson',
    category: 'Digital Art',
    description: 'Creating vibrant digital illustrations and tutorials for aspiring artists.',
    longDescription: `I'm a digital artist with over 10 years of experience in illustration and concept art. 
      Through my work, I aim to inspire others and share my knowledge of digital art techniques.
      
      As a member, you'll get access to my process videos, layered PSD files, and exclusive tutorials 
      that break down my approach to color, composition, and character design.`,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    monthlySubscribers: 342,
    monthlyIncome: '$1,710',
    membershipTiers: [
      {
        id: 1,
        name: 'Supporter',
        price: 5,
        description: 'Access to patron-only posts and community',
        benefits: [
          'Access to patron-only content feed',
          'Behind-the-scenes updates',
          'Join my community Discord server'
        ]
      },
      {
        id: 2,
        name: 'Art Enthusiast',
        price: 10,
        description: 'Get high-res artwork and early access to new pieces',
        benefits: [
          'All previous tier benefits',
          'High-resolution artwork downloads',
          'Early access to new artwork',
          'Monthly digital wallpapers'
        ]
      },
      {
        id: 3,
        name: 'Art Student',
        price: 25,
        description: 'Learn with detailed tutorials and process videos',
        benefits: [
          'All previous tier benefits',
          'Step-by-step tutorials',
          'Process videos for all artwork',
          'Layered PSD files',
          'Monthly Q&A session'
        ]
      }
    ],
    posts: [
      {
        id: 1,
        title: 'New Character Design: Forest Guardian',
        excerpt: 'Check out my latest character design for an upcoming fantasy series...',
        date: '2025-04-10',
        imageUrl: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        isPublic: true
      },
      {
        id: 2,
        title: 'Color Theory Workshop: Creating Mood with Color',
        excerpt: 'In this exclusive tutorial, I break down how I use color to create atmosphere...',
        date: '2025-04-05',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        isPublic: false,
        tierAccess: 2
      },
      {
        id: 3,
        title: 'Process Video: From Sketch to Final Illustration',
        excerpt: 'Watch my complete process from initial thumbnail sketches to final rendering...',
        date: '2025-03-28',
        imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        isPublic: false,
        tierAccess: 3
      }
    ]
  },
  '2': {
    id: 2,
    name: 'Michael Chen',
    category: 'Podcasting',
    description: 'Weekly tech podcast discussing the latest in software development and tech news.',
    longDescription: `I host a weekly podcast covering the latest developments in tech, software engineering, 
      and digital culture. Each episode features in-depth discussions, interviews with industry experts, 
      and analysis of emerging trends.
      
      By becoming a member, you'll get ad-free episodes, extended interviews, and the chance to 
      participate in live recording sessions and suggest topics for future episodes.`,
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    monthlySubscribers: 523,
    monthlyIncome: '$2,615',
    membershipTiers: [
      {
        id: 1,
        name: 'Listener',
        price: 3,
        description: 'Ad-free episodes and bonus content',
        benefits: [
          'Ad-free episodes',
          'Access to patron-only feed',
          'Monthly bonus content'
        ]
      },
      {
        id: 2,
        name: 'Supporter',
        price: 8,
        description: 'Extended interviews and early access',
        benefits: [
          'All previous tier benefits',
          'Extended interviews',
          'Early access to episodes',
          'Access to episode archives'
        ]
      },
      {
        id: 3,
        name: 'Producer',
        price: 15,
        description: 'Influence the show and join live recordings',
        benefits: [
          'All previous tier benefits',
          'Submit questions for guests',
          'Vote on future topics',
          'Join live recording sessions',
          'Name mentioned in credits'
        ]
      }
    ],
    posts: [
      {
        id: 1,
        title: 'Episode 145: The Future of AI in Software Development',
        excerpt: 'This week we discuss how AI is transforming the software development landscape...',
        date: '2025-04-12',
        imageUrl: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        isPublic: true
      },
      {
        id: 2,
        title: 'Extended Interview: CTO of TechFuture Inc.',
        excerpt: 'Enjoy this extended cut of our interview with Jane Smith, CTO of TechFuture...',
        date: '2025-04-05',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        isPublic: false,
        tierAccess: 2
      },
      {
        id: 3,
        title: 'Live Recording Session: May 2025',
        excerpt: 'Join us for our next live recording session where you can participate...',
        date: '2025-04-01',
        imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        isPublic: false,
        tierAccess: 3
      }
    ]
  }
};

export default function CreatorProfile() {
  const params = useParams();
  const creatorId = params.id as string;
  
  const [creator, setCreator] = useState<any>(null);
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('posts'); // 'posts', 'about', 'membership'

  useEffect(() => {
    // Simulate API call to fetch creator data
    setIsLoading(true);
    setTimeout(() => {
      setCreator(MOCK_CREATORS[creatorId as keyof typeof MOCK_CREATORS] || null);
      setIsLoading(false);
    }, 800);
  }, [creatorId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Creator Not Found</h1>
        <p className="text-gray-600 mb-8">The creator you're looking for doesn't exist or has been removed.</p>
        <Link href="/explore" className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md">
          Explore Other Creators
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Cover Image and Profile */}
      <div className="h-64 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium text-xl">
          {creator.category} Cover Image
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative">
          <div className="absolute -top-16 left-6 sm:left-0">
            <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Profile</span>
            </div>
          </div>
          
          <div className="pt-20 sm:pt-16 sm:pl-40">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{creator.name}</h1>
                <p className="text-gray-600">{creator.category}</p>
              </div>
              
              <div className="mt-4 sm:mt-0">
                <button className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md">
                  Become a Member
                </button>
              </div>
            </div>
            
            <div className="flex mt-6 border-b border-gray-200">
              <button 
                className={`pb-4 px-6 font-medium ${activeTab === 'posts' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('posts')}
              >
                Posts
              </button>
              <button 
                className={`pb-4 px-6 font-medium ${activeTab === 'about' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button 
                className={`pb-4 px-6 font-medium ${activeTab === 'membership' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('membership')}
              >
                Membership
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          {activeTab === 'posts' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {creator.posts.map((post: any) => (
                  <div key={post.id} className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-200">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Post Image</span>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        {!post.isPublic && (
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                            {`${creator.membershipTiers.find((tier: any) => tier.id === post.tierAccess)?.name} Tier`}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                      <p className="text-gray-700 mb-4">{post.excerpt}</p>
                      <Link href={post.isPublic ? `/post/${post.id}` : `/signup`} className="text-black font-medium hover:text-gray-800">
                        {post.isPublic ? 'Read More →' : 'Unlock this post →'}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'about' && (
            <div className="bg-white rounded-md shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {creator.name}</h2>
              <div className="prose max-w-none">
                <p className="whitespace-pre-line text-gray-700">{creator.longDescription}</p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="bg-gray-100 rounded-md px-4 py-3">
                  <span className="block text-sm text-gray-500">Patrons</span>
                  <span className="text-xl font-bold text-gray-900">{creator.monthlySubscribers}</span>
                </div>
                <div className="bg-gray-100 rounded-md px-4 py-3">
                  <span className="block text-sm text-gray-500">Monthly Income</span>
                  <span className="text-xl font-bold text-gray-900">{creator.monthlyIncome}</span>
                </div>
                <div className="bg-gray-100 rounded-md px-4 py-3">
                  <span className="block text-sm text-gray-500">Joined</span>
                  <span className="text-xl font-bold text-gray-900">January 2023</span>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'membership' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Become a Member</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {creator.membershipTiers.map((tier: any) => (
                  <div 
                    key={tier.id} 
                    className={`bg-white rounded-md overflow-hidden shadow-sm border ${selectedTier === tier.id ? 'border-black ring-2 ring-black' : 'border-gray-200'}`}
                    onClick={() => setSelectedTier(tier.id)}
                  >
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-1">{tier.name}</h3>
                      <div className="text-2xl font-bold text-gray-900 mb-4">${tier.price} <span className="text-sm font-normal text-gray-500">per month</span></div>
                      <p className="text-gray-700 mb-4">{tier.description}</p>
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                        <ul className="space-y-2">
                          {tier.benefits.map((benefit: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className={`w-full py-2 px-4 rounded-md font-medium ${selectedTier === tier.id ? 'bg-black hover:bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                        {selectedTier === tier.id ? 'Selected' : 'Select'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedTier && (
                <div className="mt-8 bg-white rounded-md shadow-sm border border-gray-200 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Your Membership</h3>
                  <p className="text-gray-700 mb-6">
                    You're joining {creator.name} at the {creator.membershipTiers.find((tier: any) => tier.id === selectedTier)?.name} tier for ${creator.membershipTiers.find((tier: any) => tier.id === selectedTier)?.price}/month.
                  </p>
                  
                  <Link 
                    href="/signup"
                    className="block w-full sm:w-auto sm:inline-block text-center bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md"
                  >
                    Continue to Payment
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
