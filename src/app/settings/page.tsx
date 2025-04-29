'use client';

import { useState } from 'react';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import AnimatedButton from '@/components/animations/AnimatedButton';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const mockSettings = {
    notifications: {
      email: {
        newSubscriber: true,
        newComment: true,
        newMessage: true,
        paymentReceived: true,
        newsletter: false,
        promotions: false
      },
      push: {
        newSubscriber: true,
        newComment: false,
        newMessage: true,
        paymentReceived: true
      }
    },
    security: {
      twoFactorEnabled: false,
      lastPasswordChange: "2025-03-15",
      loginHistory: [
        { date: "2025-04-29", device: "Chrome on MacOS", location: "Lisbon, Portugal" },
        { date: "2025-04-28", device: "Safari on iPhone", location: "Lisbon, Portugal" },
        { date: "2025-04-27", device: "Chrome on MacOS", location: "Lisbon, Portugal" }
      ],
      connectedDevices: [
        { name: "MacBook Pro", lastActive: "Now", browser: "Chrome", os: "MacOS" },
        { name: "iPhone 15", lastActive: "1 hour ago", browser: "Safari", os: "iOS" }
      ]
    },
    payment: {
      defaultCard: {
        type: "Visa",
        last4: "4242",
        expiry: "12/26"
      },
      payoutMethod: {
        type: "Bank Account",
        last4: "9876",
        country: "Portugal"
      },
      payoutSchedule: "Monthly",
      minimumPayout: "$50.00",
      currency: "USD",
      taxInfo: {
        status: "Submitted",
        form: "W-9",
        lastUpdated: "2025-03-01"
      }
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'security', label: 'Security' },
    { id: 'payment', label: 'Payment' }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h1 className="text-3xl font-bold mb-8">Settings</h1>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-black text-black'
                        : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-4">Profile Information</h2>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Display Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        defaultValue="Sarah Anderson"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        defaultValue="sarah.anderson@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={4}
                        defaultValue="Digital artist and content creator passionate about sharing creative knowledge."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-4">Email Notifications</h2>
                  <div className="space-y-4">
                    {Object.entries(mockSettings.notifications.email).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-sm font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked={value}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-4">Push Notifications</h2>
                  <div className="space-y-4">
                    {Object.entries(mockSettings.notifications.push).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-sm font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked={value}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-lg font-bold">Two-Factor Authentication</h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <AnimatedButton variant={mockSettings.security.twoFactorEnabled ? "outline" : "primary"}>
                      {mockSettings.security.twoFactorEnabled ? 'Disable' : 'Enable'}
                    </AnimatedButton>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-sm font-medium mb-2">Password</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Last changed: {mockSettings.security.lastPasswordChange}
                    </p>
                    <AnimatedButton variant="outline">Change Password</AnimatedButton>
                  </div>
                </div>

                <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-4">Connected Devices</h2>
                  <div className="space-y-4">
                    {mockSettings.security.connectedDevices.map((device, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <h3 className="text-sm font-medium">{device.name}</h3>
                          <p className="text-sm text-gray-500">
                            {device.browser} on {device.os} • {device.lastActive}
                          </p>
                        </div>
                        <button className="text-sm text-red-600 hover:text-red-800">
                          Disconnect
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-4">Recent Login Activity</h2>
                  <div className="space-y-4">
                    {mockSettings.security.loginHistory.map((login, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">{login.device}</p>
                          <p className="text-sm text-gray-500">
                            {login.location} • {login.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Payment Settings */}
            {activeTab === 'payment' && (
              <div className="space-y-6">
                <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-lg font-bold">Payment Method</h2>
                      <p className="text-sm text-gray-500 mt-1">
                        {mockSettings.payment.defaultCard.type} ending in {mockSettings.payment.defaultCard.last4}
                      </p>
                      <p className="text-sm text-gray-500">
                        Expires {mockSettings.payment.defaultCard.expiry}
                      </p>
                    </div>
                    <AnimatedButton variant="outline">Update</AnimatedButton>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h2 className="text-lg font-bold mb-4">Payout Settings</h2>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium">Payout Method</p>
                        <p className="text-sm text-gray-500">
                          {mockSettings.payment.payoutMethod.type} ending in {mockSettings.payment.payoutMethod.last4}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Payout Schedule</p>
                        <p className="text-sm text-gray-500">{mockSettings.payment.payoutSchedule}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Minimum Payout Amount</p>
                        <p className="text-sm text-gray-500">{mockSettings.payment.minimumPayout}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Currency</p>
                        <p className="text-sm text-gray-500">{mockSettings.payment.currency}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-4">Tax Information</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium">Tax Form</p>
                      <p className="text-sm text-gray-500">{mockSettings.payment.taxInfo.form}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Status</p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {mockSettings.payment.taxInfo.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Last Updated</p>
                      <p className="text-sm text-gray-500">{mockSettings.payment.taxInfo.lastUpdated}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8">
              <AnimatedButton>Save Changes</AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
