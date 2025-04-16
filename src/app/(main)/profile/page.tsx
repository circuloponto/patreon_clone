'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    redirect('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
        
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-6">
              {session?.user?.image ? (
                <img 
                  src={session.user.image} 
                  alt={session.user.name || 'User'} 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-2xl font-bold">
                  {session?.user?.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              )}
            </div>
            
            <div>
              <h2 className="text-xl font-bold">{session?.user?.name}</h2>
              <p className="text-gray-600">{session?.user?.email}</p>
              <p className="text-gray-600 capitalize mt-1">
                Account type: {session?.user?.role || 'Unknown'}
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold mb-4">Account Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p>{session?.user?.name || 'Not provided'}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>{session?.user?.email}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">User ID</p>
                <p className="font-mono text-sm">{session?.user?.id}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="capitalize">{session?.user?.role}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <Link 
            href="/account/settings" 
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Edit Profile
          </Link>
          
          {session?.user?.role === 'creator' && (
            <Link 
              href="/dashboard" 
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition"
            >
              Go to Dashboard
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
