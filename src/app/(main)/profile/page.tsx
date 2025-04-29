'use client';

import Link from 'next/link';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';

export default function ProfilePage() {
  const mockUser = {
    name: "Sarah Anderson",
    email: "sarah.anderson@example.com",
    accountType: "Creator",
    bio: "Digital artist and content creator passionate about sharing creative knowledge.",
    stats: {
      subscribers: 45,
      posts: 28,
      joined: "March 2025"
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
            
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-6">
                  <span className="text-2xl font-bold">{mockUser.name.charAt(0)}</span>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold">{mockUser.name}</h2>
                  <p className="text-gray-600">{mockUser.email}</p>
                  <p className="text-gray-600 capitalize mt-1">Account type: {mockUser.accountType}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold mb-4">Account Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Bio</p>
                    <p className="mt-1">{mockUser.bio}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Total Subscribers</p>
                      <p className="font-medium">{mockUser.stats.subscribers}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Total Posts</p>
                      <p className="font-medium">{mockUser.stats.posts}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Joined</p>
                      <p className="font-medium">{mockUser.stats.joined}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                href="/settings" 
                className="bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800 transition text-center"
              >
                Edit Profile
              </Link>
              
              <Link 
                href="/dashboard" 
                className="bg-gray-100 text-gray-800 px-4 py-3 rounded-md hover:bg-gray-200 transition text-center"
              >
                Creator Dashboard
              </Link>

              <Link 
                href="/earnings" 
                className="bg-gray-100 text-gray-800 px-4 py-3 rounded-md hover:bg-gray-200 transition text-center"
              >
                View Earnings
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
