'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import AnimatedButton from '@/components/animations/AnimatedButton';

interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
}

export default function PricingPage() {
  const plans: Plan[] = [
    {
      name: 'Lite',
      price: 0,
      description: 'Perfect for getting started with content creation',
      features: [
        'Basic analytics',
        'Up to 100 subscribers',
        'Standard support',
        'Community features',
        'Basic customization'
      ]
    },
    {
      name: 'Pro',
      price: 12,
      description: 'For creators ready to grow their audience',
      features: [
        'Advanced analytics',
        'Unlimited subscribers',
        'Priority support',
        'Custom branding',
        'API access',
        'Multiple tiers',
        'Early access features'
      ]
    },
    {
      name: 'Enterprise',
      price: 49,
      description: 'For established creators and businesses',
      features: [
        'All Pro features',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'Advanced security',
        'Team collaboration',
        'Custom analytics',
        'White-label solution'
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the perfect plan for your needs. Start for free and upgrade as you grow.
                No hidden fees, cancel anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan) => (
                <motion.div
                  key={plan.name}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <AnimatedButton
                      variant={plan.name === 'Pro' ? 'primary' : 'outline'}
                      fullWidth
                    >
                      {plan.price === 0 ? 'Start for Free' : 'Get Started'}
                    </AnimatedButton>
                  </div>
                  <div className="bg-gray-50 p-8">
                    <h4 className="font-semibold mb-4">What&apos;s included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-2">Can I change plans later?</h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600">
                    We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-2">Is there a contract or commitment?</h3>
                  <p className="text-gray-600">
                    No, all plans are month-to-month with no long-term commitment. You can cancel anytime.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-2">Do you offer a free trial?</h3>
                  <p className="text-gray-600">
                    Our Lite plan is free forever. For Pro and Enterprise plans, contact us for a demo.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
