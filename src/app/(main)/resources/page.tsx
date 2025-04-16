'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, BookOpen, Video, FileText, Users, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import StaggeredList from '@/components/animations/StaggeredList';
import AnimatedButton from '@/components/animations/AnimatedButton';
import InViewAnimation from '@/components/animations/InViewAnimation';

// Resource categories
const CATEGORIES = [
  { id: 'all', name: 'All Resources' },
  { id: 'guides', name: 'Creator Guides' },
  { id: 'case-studies', name: 'Success Stories' },
  { id: 'blog', name: 'Blog Posts' },
  { id: 'tools', name: 'Tools & Templates' },
  { id: 'videos', name: 'Video Tutorials' }
];

// Resource items
const RESOURCES = [
  {
    id: 1,
    title: 'Getting Started as a Creator',
    excerpt: 'Learn the basics of setting up your creator page and building your first membership tiers.',
    category: 'guides',
    readTime: '8 min read',
    imageUrl: '/resource-images/getting-started.jpg',
    icon: <BookOpen className="h-6 w-6" />,
    featured: true
  },
  {
    id: 2,
    title: 'How to Price Your Membership Tiers',
    excerpt: 'Strategies for pricing your membership tiers to maximize value for both you and your supporters.',
    category: 'guides',
    readTime: '12 min read',
    imageUrl: '/resource-images/pricing-tiers.jpg',
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    id: 3,
    title: 'Creating Engaging Content for Your Patrons',
    excerpt: 'Tips and tricks for creating content that keeps your supporters engaged and attracts new ones.',
    category: 'guides',
    readTime: '10 min read',
    imageUrl: '/resource-images/engaging-content.jpg',
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    id: 4,
    title: 'How Artist Sarah Johnson Gained 500 Patrons in 3 Months',
    excerpt: 'Digital artist Sarah Johnson shares her strategy for rapidly growing her patron base.',
    category: 'case-studies',
    readTime: '15 min read',
    imageUrl: '/resource-images/sarah-case-study.jpg',
    icon: <Award className="h-6 w-6" />,
    featured: true
  },
  {
    id: 5,
    title: `Podcast Creator Success: Michael Chen's Journey`,
    excerpt: 'How tech podcaster Michael Chen turned his passion into a full-time career with membership support.',
    category: 'case-studies',
    readTime: '18 min read',
    imageUrl: '/resource-images/michael-case-study.jpg',
    icon: <Award className="h-6 w-6" />
  },
  {
    id: 6,
    title: 'The State of the Creator Economy in 2025',
    excerpt: 'Our annual report on trends, challenges, and opportunities in the creator economy landscape.',
    category: 'blog',
    readTime: '20 min read',
    imageUrl: '/resource-images/creator-economy.jpg',
    icon: <FileText className="h-6 w-6" />,
    featured: true
  },
  {
    id: 7,
    title: 'Building Community Around Your Creative Work',
    excerpt: 'Strategies for fostering an engaged community that supports your creative endeavors.',
    category: 'blog',
    readTime: '14 min read',
    imageUrl: '/resource-images/building-community.jpg',
    icon: <FileText className="h-6 w-6" />
  },
  {
    id: 8,
    title: 'Content Calendar Template for Creators',
    excerpt: 'A customizable content calendar to help you plan and schedule your content effectively.',
    category: 'tools',
    readTime: 'Template',
    imageUrl: '/resource-images/content-calendar.jpg',
    icon: <FileText className="h-6 w-6" />
  },
  {
    id: 9,
    title: 'Membership Tier Planning Worksheet',
    excerpt: 'A worksheet to help you design compelling membership tiers that convert supporters.',
    category: 'tools',
    readTime: 'Template',
    imageUrl: '/resource-images/tier-planning.jpg',
    icon: <FileText className="h-6 w-6" />
  },
  {
    id: 10,
    title: 'Video: Setting Up Your Creator Page',
    excerpt: 'A step-by-step video tutorial on how to set up your creator page for maximum impact.',
    category: 'videos',
    readTime: '10 min video',
    imageUrl: '/resource-images/setup-video.jpg',
    icon: <Video className="h-6 w-6" />
  },
  {
    id: 11,
    title: 'Video: Engaging With Your Community',
    excerpt: 'Learn effective strategies for engaging with your supporters and building a thriving community.',
    category: 'videos',
    readTime: '15 min video',
    imageUrl: '/resource-images/community-video.jpg',
    icon: <Video className="h-6 w-6" />
  },
  {
    id: 12,
    title: 'Creator Spotlight: Emma Rodriguez, Fiction Writer',
    excerpt: 'How fiction writer Emma Rodriguez built a sustainable income through serialized storytelling.',
    category: 'case-studies',
    readTime: '12 min read',
    imageUrl: '/resource-images/emma-case-study.jpg',
    icon: <Award className="h-6 w-6" />
  }
];

// Upcoming webinars
const WEBINARS = [
  {
    id: 1,
    title: "Maximizing Your Reach on Social Media",
    date: 'April 20, 2025',
    time: '2:00 PM EST',
    host: 'Marketing Expert Jane Smith',
    imageUrl: '/webinar-images/social-media.jpg'
  },
  {
    id: 2,
    title: 'Financial Planning for Independent Creators',
    date: 'April 25, 2025',
    time: '1:00 PM EST',
    host: 'Financial Advisor Mark Johnson',
    imageUrl: '/webinar-images/financial-planning.jpg'
  },
  {
    id: 3,
    title: 'Building Your Brand as a Creator',
    date: 'May 5, 2025',
    time: '3:00 PM EST',
    host: 'Brand Strategist Lisa Chen',
    imageUrl: '/webinar-images/brand-building.jpg'
  }
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Filter resources based on search query and selected category
  const filteredResources = RESOURCES.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get featured resources
  const featuredResources = RESOURCES.filter(resource => resource.featured);
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <FadeIn direction="up">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Creator Resources</h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl">
                Guides, tools, and inspiration to help you succeed as a creator and build a sustainable business.
              </p>
            </FadeIn>
            
            {/* Search Bar */}
            <FadeIn direction="up" delay={0.1}>
              <div className="relative max-w-xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <motion.input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:bg-opacity-100 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex overflow-x-auto py-4 space-x-8 no-scrollbar">
              <StaggeredList>
                {CATEGORIES.map((category) => (
                  <motion.button
                    key={category.id}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      selectedCategory === category.id
                        ? 'border-black text-black'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </StaggeredList>
            </div>
          </div>
        </div>
        
        {/* Featured Resources */}
        {selectedCategory === 'all' && searchQuery === '' && (
          <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-6 max-w-6xl">
              <FadeIn>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>
              </FadeIn>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredResources.map((resource, index) => (
                  <InViewAnimation key={resource.id} delay={0.1 * index} direction="up">
                    <motion.div
                      className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <div className="h-40 bg-gray-200 relative">
                        <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 m-2 rounded">
                          Featured
                        </div>
                        <div className="h-full w-full bg-gray-300"></div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className="inline-flex items-center mr-2 text-black">
                            {resource.icon}
                          </span>
                          <span>{resource.readTime}</span>
                        </div>
                        <h3 className="font-bold text-xl mb-2">{resource.title}</h3>
                        <p className="text-gray-600 mb-4">{resource.excerpt}</p>
                        <Link href={`/resources/${resource.id}`}>
                          <AnimatedButton 
                            variant="outline" 
                            className="inline-flex items-center text-black font-medium hover:text-gray-700"
                          >
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </AnimatedButton>
                        </Link>
                      </div>
                    </motion.div>
                  </InViewAnimation>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* All Resources */}
        <div className="py-12">
          <div className="container mx-auto px-6 max-w-6xl">
            <FadeIn>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {selectedCategory === 'all' ? 'All Resources' : CATEGORIES.find(cat => cat.id === selectedCategory)?.name}
              </h2>
            </FadeIn>
            
            {filteredResources.length === 0 ? (
              <FadeIn>
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No resources found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your search or selecting a different category.</p>
                  <AnimatedButton
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="bg-black text-white hover:bg-gray-800 font-medium py-2 px-6 rounded-md"
                    variant="primary"
                  >
                    Reset Filters
                  </AnimatedButton>
                </div>
              </FadeIn>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, index) => (
                  <InViewAnimation key={resource.id} delay={0.05 * (index % 3)} direction="up">
                    <motion.div
                      className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <div className="h-40 bg-gray-200 relative">
                        <div className="h-full w-full bg-gray-300"></div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className="inline-flex items-center mr-2 text-black">
                            {resource.icon}
                          </span>
                          <span>{resource.readTime}</span>
                        </div>
                        <h3 className="font-bold text-xl mb-2">{resource.title}</h3>
                        <p className="text-gray-600 mb-4">{resource.excerpt}</p>
                        <Link href={`/resources/${resource.id}`}>
                          <AnimatedButton 
                            variant="outline" 
                            className="inline-flex items-center text-black font-medium hover:text-gray-700"
                          >
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </AnimatedButton>
                        </Link>
                      </div>
                    </motion.div>
                  </InViewAnimation>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Upcoming Webinars */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-6 max-w-6xl">
            <FadeIn>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Webinars</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {WEBINARS.map((webinar, index) => (
                <InViewAnimation key={webinar.id} delay={0.1 * index} direction="up">
                  <motion.div
                    className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="h-40 bg-gray-200 relative">
                      <div className="h-full w-full bg-gray-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="bg-black text-white px-2 py-1 rounded text-xs font-medium">
                          Webinar
                        </span>
                        <span className="ml-2">{webinar.date} • {webinar.time}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-2">{webinar.title}</h3>
                      <p className="text-gray-600 mb-4">Hosted by {webinar.host}</p>
                      <Link href={`/webinars/${webinar.id}`}>
                        <AnimatedButton 
                          variant="primary" 
                          className="bg-black text-white hover:bg-gray-800 font-medium py-2 px-4 rounded-md inline-flex items-center"
                        >
                          Register Now
                        </AnimatedButton>
                      </Link>
                    </div>
                  </motion.div>
                </InViewAnimation>
              ))}
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="py-16 bg-black text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Creator Resources in Your Inbox</h2>
              <p className="text-lg mb-8">
                Sign up for our newsletter to receive the latest resources, tips, and inspiration for creators.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                <motion.input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                />
                <AnimatedButton
                  variant="primary"
                  className="bg-white text-black hover:bg-gray-100 font-medium py-3 px-6 rounded-md"
                >
                  Subscribe
                </AnimatedButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
