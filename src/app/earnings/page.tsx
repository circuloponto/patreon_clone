'use client';

import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';

export default function EarningsPage() {
  const mockEarnings = {
    totalEarnings: 1250.75,
    thisMonth: 325.50,
    lastMonth: 298.25,
    subscribers: 45,
    topTiers: [
      { name: "Gold Tier", subscribers: 5, revenue: 150.00 },
      { name: "Silver Tier", subscribers: 15, revenue: 225.00 },
      { name: "Bronze Tier", subscribers: 25, revenue: 175.00 }
    ],
    recentTransactions: [
      { date: "2025-04-28", type: "Subscription", amount: 25.00, from: "John D." },
      { date: "2025-04-27", type: "One-time", amount: 50.00, from: "Sarah M." },
      { date: "2025-04-26", type: "Subscription", amount: 15.00, from: "Mike R." },
      { date: "2025-04-25", type: "Subscription", amount: 30.00, from: "Emma S." }
    ]
  };

  return (
    <PageTransition>
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <FadeIn>
          <h1 className="text-3xl font-bold mb-8">Earnings Dashboard</h1>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Total Earnings</h3>
              <p className="text-2xl font-bold mt-2">${mockEarnings.totalEarnings}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">This Month</h3>
              <p className="text-2xl font-bold mt-2">${mockEarnings.thisMonth}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Last Month</h3>
              <p className="text-2xl font-bold mt-2">${mockEarnings.lastMonth}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Total Subscribers</h3>
              <p className="text-2xl font-bold mt-2">{mockEarnings.subscribers}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tier Performance */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Tier Performance</h2>
              <div className="space-y-4">
                {mockEarnings.topTiers.map((tier, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{tier.name}</h3>
                      <p className="text-sm text-gray-500">{tier.subscribers} subscribers</p>
                    </div>
                    <p className="font-medium">${tier.revenue}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
              <div className="space-y-4">
                {mockEarnings.recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{transaction.from}</h3>
                      <p className="text-sm text-gray-500">
                        {transaction.type} • {transaction.date}
                      </p>
                    </div>
                    <p className="font-medium">${transaction.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
