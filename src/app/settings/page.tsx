'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import AnimatedButton from '@/components/animations/AnimatedButton';
import StaggeredList from '@/components/animations/StaggeredList';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('profile');

  const tabOptions = [
    { id: 'profile', label: 'Profile' },
    { id: 'account', label: 'Account' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'security', label: 'Security' },
  ];

  // Add payment settings tab for creators
  if (session?.user?.role === 'creator') {
    tabOptions.push({ id: 'payments', label: 'Payment Settings' });
  }

  return (
    <ProtectedRoute>
      <PageTransition>
        <div className="container mx-auto py-8 px-4 max-w-6xl">
          <FadeIn>
            <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
          </FadeIn>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <FadeIn delay={0.1} direction="left">
                <div className="bg-white shadow-sm rounded-lg border border-gray-200">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="font-semibold text-lg">Settings</h2>
                  </div>
                  <div className="p-2">
                    <StaggeredList>
                      {tabOptions.map((tab) => (
                        <button 
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full text-left px-4 py-2 rounded-md ${activeTab === tab.id ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'}`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </StaggeredList>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            {/* Main Content */}
            <div className="w-full md:w-3/4">
              <FadeIn delay={0.2} direction="right">
                <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
                  {activeTab === 'profile' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            defaultValue={session?.user?.name || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                            Bio
                          </label>
                          <textarea
                            id="bio"
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Tell us about yourself..."
                          />
                        </div>
                        <div>
                          <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 mb-1">
                            Profile Picture
                          </label>
                          <div className="flex items-center space-x-4">
                            <motion.div 
                              className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              {session?.user?.image ? (
                                <img 
                                  src={session.user.image} 
                                  alt="Profile" 
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="text-lg font-medium">
                                  {session?.user?.name?.charAt(0).toUpperCase() || 'U'}
                                </span>
                              )}
                            </motion.div>
                            <AnimatedButton variant="outline">
                              Change
                            </AnimatedButton>
                          </div>
                        </div>
                        <div className="pt-4">
                          <AnimatedButton>
                            Save Changes
                          </AnimatedButton>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {activeTab === 'account' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            defaultValue={session?.user?.email || ''}
                            disabled
                          />
                          <p className="text-sm text-gray-500 mt-1">
                            To change your email, please contact support.
                          </p>
                        </div>
                        <div>
                          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                          </label>
                          <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Choose a username"
                          />
                        </div>
                        <div className="pt-4">
                          <AnimatedButton>
                            Save Changes
                          </AnimatedButton>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {activeTab === 'notifications' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
                      <StaggeredList className="space-y-4">
                        {[
                          {
                            id: 'emailToggle',
                            title: 'Email Notifications',
                            description: 'Receive updates via email',
                            defaultChecked: false
                          },
                          {
                            id: 'postToggle',
                            title: 'New Post Notifications',
                            description: 'Get notified when creators you support post new content',
                            defaultChecked: true
                          },
                          {
                            id: 'marketingToggle',
                            title: 'Marketing Communications',
                            description: 'Receive promotional emails and offers',
                            defaultChecked: false
                          }
                        ].map((notification) => (
                          <div key={notification.id} className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">{notification.title}</h3>
                              <p className="text-sm text-gray-500">{notification.description}</p>
                            </div>
                            <motion.div 
                              className="relative inline-block w-12 mr-2 align-middle select-none"
                              whileTap={{ scale: 0.95 }}
                            >
                              <input type="checkbox" id={notification.id} className="sr-only" defaultChecked={notification.defaultChecked} />
                              <label 
                                htmlFor={notification.id} 
                                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                              ></label>
                            </motion.div>
                          </div>
                        ))}
                      </StaggeredList>
                      <div className="pt-6">
                        <AnimatedButton>
                          Save Preferences
                        </AnimatedButton>
                      </div>
                    </motion.div>
                  )}
                  
                  {activeTab === 'security' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium mb-2">Change Password</h3>
                          <StaggeredList className="space-y-3">
                            {[
                              { id: 'currentPassword', label: 'Current Password' },
                              { id: 'newPassword', label: 'New Password' },
                              { id: 'confirmPassword', label: 'Confirm New Password' }
                            ].map((field) => (
                              <div key={field.id}>
                                <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                                  {field.label}
                                </label>
                                <input
                                  type="password"
                                  id={field.id}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                              </div>
                            ))}
                          </StaggeredList>
                        </div>
                        <div className="pt-4">
                          <AnimatedButton>
                            Update Password
                          </AnimatedButton>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {activeTab === 'payments' && session?.user?.role === 'creator' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl font-semibold mb-4">Payment Settings</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium mb-2">Payout Method</h3>
                          <p className="text-sm text-gray-500 mb-3">
                            Choose how you want to receive your earnings
                          </p>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                            <option>Bank Transfer</option>
                            <option>PayPal</option>
                            <option>Stripe</option>
                          </select>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Tax Information</h3>
                          <p className="text-sm text-gray-500 mb-3">
                            Required for creators earning income on the platform
                          </p>
                          <AnimatedButton variant="outline">
                            Update Tax Information
                          </AnimatedButton>
                        </div>
                        <div className="pt-4">
                          <AnimatedButton>
                            Save Payment Settings
                          </AnimatedButton>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </PageTransition>
    </ProtectedRoute>
  );
}
