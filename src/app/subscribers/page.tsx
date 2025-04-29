'use client';

import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import AnimatedButton from '@/components/animations/AnimatedButton';

export default function SubscribersPage() {
  const mockSubscribers = [
    {
      id: 1,
      name: "John Doe",
      tier: "Gold",
      since: "March 2025",
      totalSupport: "$150.00",
      lastPayment: "2025-04-15",
      status: "active"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      tier: "Gold",
      since: "February 2025",
      totalSupport: "$175.00",
      lastPayment: "2025-04-12",
      status: "active"
    },
    {
      id: 3,
      name: "Mike Reynolds",
      tier: "Silver",
      since: "April 2025",
      totalSupport: "$45.00",
      lastPayment: "2025-04-20",
      status: "active"
    },
    {
      id: 4,
      name: "Emma Smith",
      tier: "Bronze",
      since: "March 2025",
      totalSupport: "$30.00",
      lastPayment: "2025-04-18",
      status: "active"
    },
    {
      id: 5,
      name: "David Wilson",
      tier: "Silver",
      since: "January 2025",
      totalSupport: "$75.00",
      lastPayment: "2025-04-10",
      status: "active"
    },
    {
      id: 6,
      name: "Lisa Brown",
      tier: "Gold",
      since: "March 2025",
      totalSupport: "$150.00",
      lastPayment: "2025-04-15",
      status: "active"
    },
    {
      id: 7,
      name: "James Anderson",
      tier: "Bronze",
      since: "April 2025",
      totalSupport: "$20.00",
      lastPayment: "2025-04-22",
      status: "active"
    },
    {
      id: 8,
      name: "Patricia Martinez",
      tier: "Silver",
      since: "February 2025",
      totalSupport: "$60.00",
      lastPayment: "2025-04-14",
      status: "active"
    }
  ];

  const tierCounts = {
    Gold: mockSubscribers.filter(s => s.tier === 'Gold').length,
    Silver: mockSubscribers.filter(s => s.tier === 'Silver').length,
    Bronze: mockSubscribers.filter(s => s.tier === 'Bronze').length
  };

  return (
    <PageTransition>
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <FadeIn>
          <h1 className="text-3xl font-bold mb-8">Subscribers</h1>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Gold Tier</h3>
              <p className="text-2xl font-bold mt-2">{tierCounts.Gold} subscribers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Silver Tier</h3>
              <p className="text-2xl font-bold mt-2">{tierCounts.Silver} subscribers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Bronze Tier</h3>
              <p className="text-2xl font-bold mt-2">{tierCounts.Bronze} subscribers</p>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-4">
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white">
              <option value="all">All Tiers</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="bronze">Bronze</option>
            </select>

            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="amount">Highest Support</option>
            </select>
          </div>

          {/* Subscribers Table */}
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subscriber
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tier
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Since
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Support
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Payment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockSubscribers.map((subscriber) => (
                    <tr key={subscriber.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-sm font-medium">
                              {subscriber.name.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {subscriber.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          subscriber.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                          subscriber.tier === 'Silver' ? 'bg-gray-100 text-gray-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {subscriber.tier}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {subscriber.since}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {subscriber.totalSupport}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {subscriber.lastPayment}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {subscriber.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                Next
              </button>
            </nav>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
