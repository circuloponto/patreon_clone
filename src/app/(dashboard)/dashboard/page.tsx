'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BarChart, 
  UsersRound, 
  DollarSign, 
  FileText, 
  Settings, 
  PlusCircle,
  TrendingUp,
  Calendar,
  Edit,
  Trash2
} from 'lucide-react';

// Mock data for dashboard
const DASHBOARD_DATA = {
  stats: {
    totalPatrons: 342,
    patronsGrowth: 12,
    monthlyIncome: '$1,710',
    incomeGrowth: 8,
    totalPosts: 47,
    postsThisMonth: 5
  },
  recentPatrons: [
    { id: 1, name: 'John Smith', tier: 'Art Student', joinDate: '2025-04-01', amount: '$25' },
    { id: 2, name: 'Emma Wilson', tier: 'Art Enthusiast', joinDate: '2025-03-28', amount: '$10' },
    { id: 3, name: 'Michael Brown', tier: 'Supporter', joinDate: '2025-03-25', amount: '$5' },
    { id: 4, name: 'Sophia Garcia', tier: 'Art Student', joinDate: '2025-03-20', amount: '$25' },
  ],
  recentPosts: [
    { id: 1, title: 'New Character Design: Forest Guardian', date: '2025-04-10', status: 'published', accessLevel: 'Public', views: 423 },
    { id: 2, title: 'Color Theory Workshop: Creating Mood with Color', date: '2025-04-05', status: 'published', accessLevel: 'Art Enthusiast', views: 187 },
    { id: 3, title: 'Process Video: From Sketch to Final Illustration', date: '2025-03-28', status: 'published', accessLevel: 'Art Student', views: 156 },
  ],
  allPosts: [
    { id: 1, title: 'New Character Design: Forest Guardian', date: '2025-04-10', status: 'published', accessLevel: 'Public', views: 423 },
    { id: 2, title: 'Color Theory Workshop: Creating Mood with Color', date: '2025-04-05', status: 'published', accessLevel: 'Art Enthusiast', views: 187 },
    { id: 3, title: 'Process Video: From Sketch to Final Illustration', date: '2025-03-28', status: 'published', accessLevel: 'Art Student', views: 156 },
    { id: 4, title: 'Q&A Session: March 2025', date: '2025-03-15', status: 'published', accessLevel: 'Art Student', views: 142 },
    { id: 5, title: 'Composition Techniques for Dynamic Scenes', date: '2025-03-08', status: 'published', accessLevel: 'Art Enthusiast', views: 203 },
    { id: 6, title: 'Monthly Wallpaper Pack: March 2025', date: '2025-03-01', status: 'published', accessLevel: 'Art Enthusiast', views: 278 },
    { id: 7, title: 'Character Expression Tutorial', date: '2025-02-22', status: 'published', accessLevel: 'Art Student', views: 189 },
    { id: 8, title: 'Behind the Scenes: Client Commission', date: '2025-02-15', status: 'published', accessLevel: 'Supporter', views: 312 },
  ],
  allPatrons: [
    { id: 1, name: 'John Smith', tier: 'Art Student', joinDate: '2025-04-01', amount: '$25' },
    { id: 2, name: 'Emma Wilson', tier: 'Art Enthusiast', joinDate: '2025-03-28', amount: '$10' },
    { id: 3, name: 'Michael Brown', tier: 'Supporter', joinDate: '2025-03-25', amount: '$5' },
    { id: 4, name: 'Sophia Garcia', tier: 'Art Student', joinDate: '2025-03-20', amount: '$25' },
    { id: 5, name: 'David Lee', tier: 'Art Enthusiast', joinDate: '2025-03-15', amount: '$10' },
    { id: 6, name: 'Olivia Martinez', tier: 'Supporter', joinDate: '2025-03-10', amount: '$5' },
    { id: 7, name: 'James Johnson', tier: 'Art Student', joinDate: '2025-03-05', amount: '$25' },
    { id: 8, name: 'Emily Thompson', tier: 'Art Enthusiast', joinDate: '2025-02-28', amount: '$10' },
    { id: 9, name: 'Daniel Rodriguez', tier: 'Supporter', joinDate: '2025-02-25', amount: '$5' },
    { id: 10, name: 'Ava Williams', tier: 'Art Student', joinDate: '2025-02-20', amount: '$25' },
  ]
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'posts', 'patrons', 'earnings', 'settings'
  
  return (
    <div className="min-h-screen bg-white">
      {/* Dashboard Header */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-2xl font-bold">Creator Dashboard</h1>
        </div>
      </header>
      
      {/* Dashboard Navigation */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <nav className="flex overflow-x-auto">
            <button
              className={`px-6 py-4 flex items-center whitespace-nowrap font-medium ${activeTab === 'overview' ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('overview')}
            >
              <BarChart className="h-5 w-5 mr-2" />
              Overview
            </button>
            <button
              className={`px-6 py-4 flex items-center whitespace-nowrap font-medium ${activeTab === 'posts' ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('posts')}
            >
              <FileText className="h-5 w-5 mr-2" />
              Posts
            </button>
            <button
              className={`px-6 py-4 flex items-center whitespace-nowrap font-medium ${activeTab === 'patrons' ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('patrons')}
            >
              <UsersRound className="h-5 w-5 mr-2" />
              Patrons
            </button>
            <button
              className={`px-6 py-4 flex items-center whitespace-nowrap font-medium ${activeTab === 'earnings' ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('earnings')}
            >
              <DollarSign className="h-5 w-5 mr-2" />
              Earnings
            </button>
            <button
              className={`px-6 py-4 flex items-center whitespace-nowrap font-medium ${activeTab === 'settings' ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </button>
          </nav>
        </div>
      </div>
      
      {/* Dashboard Content */}
      <main className="container mx-auto px-6 max-w-6xl py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Total Patrons</p>
                    <h3 className="text-3xl font-bold text-gray-900">{DASHBOARD_DATA.stats.totalPatrons}</h3>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-full">
                    <UsersRound className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+{DASHBOARD_DATA.stats.patronsGrowth}%</span>
                  <span className="text-gray-500 ml-1">from last month</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Monthly Income</p>
                    <h3 className="text-3xl font-bold text-gray-900">{DASHBOARD_DATA.stats.monthlyIncome}</h3>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+{DASHBOARD_DATA.stats.incomeGrowth}%</span>
                  <span className="text-gray-500 ml-1">from last month</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Total Posts</p>
                    <h3 className="text-3xl font-bold text-gray-900">{DASHBOARD_DATA.stats.totalPosts}</h3>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-gray-500">{DASHBOARD_DATA.stats.postsThisMonth} posts this month</span>
                </div>
              </div>
            </div>
            
            {/* Recent Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Posts */}
              <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900">Recent Posts</h3>
                  <Link href="/dashboard/post/new" className="flex items-center text-sm font-medium text-black hover:text-gray-800">
                    <PlusCircle className="h-4 w-4 mr-1" />
                    New Post
                  </Link>
                </div>
                <div className="divide-y divide-gray-200">
                  {DASHBOARD_DATA.recentPosts.map(post => (
                    <div key={post.id} className="p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{post.title}</h4>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.accessLevel}</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          {post.views} views
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <button 
                    className="w-full text-center text-sm font-medium text-black hover:text-gray-800"
                    onClick={() => setActiveTab('posts')}
                  >
                    View All Posts
                  </button>
                </div>
              </div>
              
              {/* Recent Patrons */}
              <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900">Recent Patrons</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {DASHBOARD_DATA.recentPatrons.map(patron => (
                    <div key={patron.id} className="p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{patron.name}</h4>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <span>{patron.tier}</span>
                            <span className="mx-2">•</span>
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>Joined {patron.joinDate}</span>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          {patron.amount}/mo
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <button 
                    className="w-full text-center text-sm font-medium text-black hover:text-gray-800"
                    onClick={() => setActiveTab('patrons')}
                  >
                    View All Patrons
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Posts Tab */}
        {activeTab === 'posts' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Manage Posts</h2>
              <Link 
                href="/dashboard/post/new" 
                className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md flex items-center"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Create New Post
              </Link>
            </div>
            
            <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Access Level
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Views
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {DASHBOARD_DATA.allPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{post.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{post.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {post.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{post.accessLevel}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {post.views}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-black hover:text-gray-800 mr-3">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Patrons Tab */}
        {activeTab === 'patrons' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Manage Patrons</h2>
            </div>
            
            <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Membership Tier
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Join Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Monthly Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {DASHBOARD_DATA.allPatrons.map((patron) => (
                      <tr key={patron.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{patron.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{patron.tier}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{patron.joinDate}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {patron.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Earnings Tab */}
        {activeTab === 'earnings' && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Earnings Dashboard</h2>
            <p className="text-gray-500 mb-8">This feature is coming soon.</p>
          </div>
        )}
        
        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Settings</h2>
            <p className="text-gray-500 mb-8">This feature is coming soon.</p>
          </div>
        )}
      </main>
    </div>
  );
}
