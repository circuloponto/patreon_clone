'use client';

import { motion } from 'framer-motion';
import { Book, Video, MessageCircle, FileText, Users, BarChart } from 'lucide-react';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import AnimatedButton from '@/components/animations/AnimatedButton';

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Creator Handbook',
      description: 'Learn the fundamentals of building and growing your creator business.',
      icon: Book,
      link: '/handbook'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step guides to help you make the most of our platform.',
      icon: Video,
      link: '/tutorials'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other creators, share experiences, and get advice.',
      icon: MessageCircle,
      link: '/community'
    },
    {
      title: 'Blog',
      description: 'Tips, strategies, and success stories from our creator community.',
      icon: FileText,
      link: '/blog'
    },
    {
      title: 'Creator Network',
      description: 'Join exclusive events and collaborate with fellow creators.',
      icon: Users,
      link: '/network'
    },
    {
      title: 'Analytics Guide',
      description: 'Learn how to use data to grow your audience and income.',
      icon: BarChart,
      link: '/analytics'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Creator Resources</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to succeed as a creator. Access guides, tutorials,
                and connect with our community to grow your audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {resources.map((resource) => (
                <motion.div
                  key={resource.title}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <resource.icon className="w-8 h-8 text-black" />
                    <h3 className="text-xl font-bold ml-3">{resource.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <AnimatedButton
                    variant="outline"
                    fullWidth
                  >
                    Explore {resource.title}
                  </AnimatedButton>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-8">Need More Help?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4">Contact Support</h3>
                  <p className="text-gray-600 mb-6">
                    Our support team is available 24/7 to help you with any questions
                    or issues you may have.
                  </p>
                  <AnimatedButton variant="primary">Get Support</AnimatedButton>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4">Schedule a Demo</h3>
                  <p className="text-gray-600 mb-6">
                    Want a personalized walkthrough of our platform? Book a demo with
                    our team.
                  </p>
                  <AnimatedButton variant="primary">Book Demo</AnimatedButton>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
