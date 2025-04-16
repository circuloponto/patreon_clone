'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import StaggeredList from '@/components/animations/StaggeredList';
import AnimatedButton from '@/components/animations/AnimatedButton';
import InViewAnimation from '@/components/animations/InViewAnimation';

// Pricing tiers data
const PRICING_TIERS = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Everything you need to get started',
    price: {
      monthly: 0,
      yearly: 0
    },
    features: [
      'Create a creator profile',
      'Accept one-time donations',
      'Basic analytics',
      'Up to 5 posts per month',
      'Standard support'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For growing creators with an established audience',
    price: {
      monthly: 12,
      yearly: 108 // 10% discount for annual
    },
    features: [
      'Everything in Basic',
      'Custom membership tiers',
      'Advanced analytics',
      'Unlimited posts',
      'Priority support',
      'Early access to new features',
      'Custom branding options'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    id: 'business',
    name: 'Business',
    description: 'For professional creators and teams',
    price: {
      monthly: 39,
      yearly: 348 // 10% discount for annual
    },
    features: [
      'Everything in Pro',
      'Team accounts (up to 3 members)',
      'API access',
      'Dedicated account manager',
      'Exclusive creator events',
      'Custom integrations',
      'Reduced platform fees'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

// FAQ data
const FAQ_ITEMS = [
  {
    question: 'How does PatreonClone make money?',
    answer: `PatreonClone takes a small percentage of the transactions between creators and their supporters. The exact percentage varies by plan, with our Basic plan having the highest fees and our Business plan offering reduced fees.`
  },
  {
    question: 'Can I change plans later?',
    answer: `Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to the new features. When downgrading, the changes will take effect at the end of your current billing cycle.`
  },
  {
    question: 'Is there a free trial?',
    answer: `Yes, we offer a 14-day free trial on our Pro and Business plans. You can explore all features during this period with no commitment.`
  },
  {
    question: 'What payment methods do you accept?',
    answer: `We accept all major credit cards, PayPal, and in some regions, we support bank transfers and other local payment methods.`
  },
  {
    question: 'How do I cancel my subscription?',
    answer: `You can cancel your subscription at any time from your account settings. After cancellation, you'll still have access to your paid features until the end of your current billing cycle.`
  },
  {
    question: 'Do you offer discounts for non-profits?',
    answer: `Yes, we offer special pricing for registered non-profit organizations. Please contact our sales team for more information.`
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <FadeIn>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Choose the plan that's right for your creator journey. No hidden fees or surprises.
              </p>
            </FadeIn>
            
            {/* Billing Toggle */}
            <FadeIn delay={0.1}>
              <div className="flex items-center justify-center space-x-3 mb-8">
                <span className={`text-sm ${billingCycle === 'monthly' ? 'font-medium' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <motion.button 
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700"
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">Toggle billing cycle</span>
                  <motion.span 
                    className="inline-block h-4 w-4 rounded-full bg-white"
                    animate={{ 
                      x: billingCycle === 'yearly' ? 24 : 4 
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
                <span className={`text-sm ${billingCycle === 'yearly' ? 'font-medium' : 'text-gray-400'}`}>
                  Yearly <span className="text-xs text-green-400 ml-1">Save 10%</span>
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Pricing Tiers */}
        <div className="container mx-auto px-6 max-w-6xl py-12 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, index) => (
              <InViewAnimation 
                key={tier.id} 
                delay={0.1 * index} 
                direction="up"
              >
                <motion.div 
                  className={`bg-white rounded-lg shadow-sm border ${
                    tier.popular ? 'border-black ring-1 ring-black' : 'border-gray-200'
                  } overflow-hidden relative`}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {tier.popular && (
                    <motion.div 
                      className="absolute top-0 inset-x-0 bg-black text-white text-xs text-center py-1 font-medium"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Most Popular
                    </motion.div>
                  )}
                  
                  <div className={`p-8 ${tier.popular ? 'pt-10' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    
                    <motion.div 
                      className="mb-6"
                      key={billingCycle} // Force re-render animation when billing cycle changes
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-4xl font-bold text-gray-900">
                        ${billingCycle === 'monthly' ? tier.price.monthly : (tier.price.yearly / 12).toFixed(0)}
                      </span>
                      <span className="text-gray-600 ml-1">
                        /month
                      </span>
                      
                      {billingCycle === 'yearly' && tier.price.yearly > 0 && (
                        <p className="text-sm text-gray-500 mt-1">
                          Billed annually (${tier.price.yearly}/year)
                        </p>
                      )}
                    </motion.div>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 * index, type: "spring" }}
                          >
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <Link href={tier.id === 'business' ? '/contact' : '/signup'}>
                      <AnimatedButton
                        variant={tier.popular ? "primary" : "outline"}
                        className={`block w-full py-2 px-4 rounded-md text-center font-medium ${
                          tier.popular 
                            ? 'bg-black hover:bg-gray-800 text-white' 
                            : 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-900'
                        }`}
                      >
                        {tier.cta}
                      </AnimatedButton>
                    </Link>
                  </div>
                </motion.div>
              </InViewAnimation>
            ))}
          </div>
        </div>
        
        {/* Features Comparison */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <InViewAnimation>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Compare Features</h2>
            </InViewAnimation>
            
            {/* Feature comparison table would go here */}
            <div className="overflow-x-auto">
              <InViewAnimation delay={0.1}>
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 px-6 text-left font-medium text-gray-500">Feature</th>
                      <th className="py-4 px-6 text-center font-medium text-gray-500">Basic</th>
                      <th className="py-4 px-6 text-center font-medium text-gray-500">Pro</th>
                      <th className="py-4 px-6 text-center font-medium text-gray-500">Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Creator Profile', basic: true, pro: true, business: true },
                      { feature: 'Custom Membership Tiers', basic: false, pro: true, business: true },
                      { feature: 'Analytics', basic: 'Basic', pro: 'Advanced', business: 'Advanced' },
                      { feature: 'Monthly Posts', basic: '5', pro: 'Unlimited', business: 'Unlimited' },
                      { feature: 'Support', basic: 'Standard', pro: 'Priority', business: 'Dedicated' },
                      { feature: 'Team Accounts', basic: false, pro: false, business: '3 members' },
                      { feature: 'API Access', basic: false, pro: false, business: true },
                    ].map((row, index) => (
                      <motion.tr 
                        key={index} 
                        className="border-b border-gray-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index }}
                      >
                        <td className="py-4 px-6 text-gray-900 font-medium">{row.feature}</td>
                        <td className="py-4 px-6 text-center">
                          {typeof row.basic === 'boolean' ? (
                            row.basic ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>
                          ) : (
                            <span className="text-gray-700">{row.basic}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof row.pro === 'boolean' ? (
                            row.pro ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>
                          ) : (
                            <span className="text-gray-700">{row.pro}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof row.business === 'boolean' ? (
                            row.business ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>
                          ) : (
                            <span className="text-gray-700">{row.business}</span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </InViewAnimation>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="container mx-auto px-6 max-w-3xl py-16">
          <InViewAnimation>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          </InViewAnimation>
          
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <InViewAnimation key={index} delay={0.05 * index}>
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full px-6 py-4 text-left font-medium focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFaq === index ? 'auto' : 0,
                      opacity: expandedFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {item.answer}
                    </div>
                  </motion.div>
                </div>
              </InViewAnimation>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <InViewAnimation>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Creator Journey?</h2>
              <p className="text-lg mb-8">Join thousands of creators who are building sustainable businesses through direct fan support.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup">
                  <AnimatedButton
                    variant="secondary" 
                    className="font-medium py-3 px-8 rounded-md"
                  >
                    Get Started
                  </AnimatedButton>
                </Link>
                <Link href="/contact">
                  <AnimatedButton
                    variant="outline" 
                    className="border-white text-white hover:bg-gray-800 font-medium py-3 px-8 rounded-md"
                  >
                    Contact Sales
                  </AnimatedButton>
                </Link>
              </div>
            </InViewAnimation>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
