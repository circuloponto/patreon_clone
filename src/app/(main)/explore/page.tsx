'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import StaggeredList from '@/components/animations/StaggeredList';
import AnimatedButton from '@/components/animations/AnimatedButton';
import InViewAnimation from '@/components/animations/InViewAnimation';

// Mock data for creators
const MOCK_CREATORS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    category: 'Digital Art',
    description: 'Creating vibrant digital illustrations and tutorials for aspiring artists.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    monthlySubscribers: 342,
    monthlyIncome: '$1,710',
  },
  {
    id: 2,
    name: 'Michael Chen',
    category: 'Podcasting',
    description: 'Weekly tech podcast discussing the latest in software development and tech news.',
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    monthlySubscribers: 523,
    monthlyIncome: '$2,615',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    category: 'Writing',
    description: 'Short stories and novel chapters for fantasy and sci-fi enthusiasts.',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    profileImage: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    monthlySubscribers: 278,
    monthlyIncome: '$1,390',
  },
  {
    id: 4,
    name: 'David Kim',
    category: 'Music',
    description: 'Original compositions and behind-the-scenes content from my recording studio.',
    coverImage: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    monthlySubscribers: 612,
    monthlyIncome: '$3,060',
  },
  {
    id: 5,
    name: 'Olivia Taylor',
    category: 'Photography',
    description: 'Travel photography and editing tutorials from around the world.',
    coverImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    monthlySubscribers: 189,
    monthlyIncome: '$945',
  },
  {
    id: 6,
    name: 'James Wilson',
    category: 'Video',
    description: 'Short films and cinematography tips for filmmakers and video enthusiasts.',
    coverImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    monthlySubscribers: 437,
    monthlyIncome: '$2,185',
  },
];

// Categories for filtering
const CATEGORIES = [
  'All Categories',
  'Art',
  'Writing',
  'Music',
  'Video',
  'Podcasting',
  'Photography',
  'Gaming',
  'Education',
  'Crafts',
];

export default function ExplorePage() {
  const [creators, setCreators] = useState(MOCK_CREATORS);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Filter creators based on category and search query
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      let filteredCreators = [...MOCK_CREATORS];
      
      // Filter by category
      if (selectedCategory !== 'All Categories') {
        filteredCreators = filteredCreators.filter(creator => 
          creator.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );
      }
      
      // Filter by search query
      if (searchQuery) {
        filteredCreators = filteredCreators.filter(creator => 
          creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          creator.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          creator.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      setCreators(filteredCreators);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  return (
    <PageTransition>
      <div className="bg-white min-h-screen pb-16">
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <FadeIn direction="up">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Amazing Creators</h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl">
                Find and support the creators you love. Your membership helps them create the content you enjoy.
              </p>
            </FadeIn>
            
            {/* Search and filter */}
            <FadeIn direction="up" delay={0.1}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <motion.div 
                    className="relative"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <motion.input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:bg-opacity-100 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                      placeholder="Search creators..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    />
                  </motion.div>
                </div>
                <div>
                  <motion.select
                    className="block w-full pl-3 pr-10 py-2 text-base border-transparent rounded-md focus:outline-none focus:ring-black focus:border-black bg-white bg-opacity-20 text-white sm:text-sm"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{ color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {CATEGORIES.map((category) => (
                      <option key={category} value={category} className="text-gray-900" style={{ backgroundColor: 'white', color: '#333' }}>
                        {category}
                      </option>
                    ))}
                  </motion.select>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Creators grid */}
        <div className="container mx-auto px-6 max-w-6xl mt-12">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <motion.div 
                className="rounded-full h-12 w-12 border-t-2 border-b-2 border-black"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </div>
          ) : creators.length === 0 ? (
            <FadeIn>
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">No creators found</h3>
                <p className="text-gray-500 mb-8">Try adjusting your search or filter criteria</p>
                <AnimatedButton
                  onClick={() => {
                    setSelectedCategory('All Categories');
                    setSearchQuery('');
                  }}
                  className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md"
                  variant="primary"
                >
                  Reset Filters
                </AnimatedButton>
              </div>
            </FadeIn>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {creators.map((creator, index) => (
                <InViewAnimation key={creator.id} delay={0.05 * (index % 3)} direction="up">
                  <motion.div 
                    className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-200"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="h-40 bg-gray-200 relative">
                      <Image 
                        src={creator.coverImage} 
                        alt={`${creator.name}'s cover`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="relative px-6 pb-6">
                      <div className="absolute -top-12 left-6">
                        <motion.div 
                          className="h-24 w-24 rounded-full border-4 border-white bg-gray-200 relative overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <Image 
                            src={creator.profileImage} 
                            alt={`${creator.name}'s profile`}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="96px"
                          />
                        </motion.div>
                      </div>
                      <div className="pt-14">
                        <h3 className="font-bold text-xl mb-1">{creator.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{creator.category}</p>
                        <p className="text-gray-700 mb-4">{creator.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">{creator.monthlySubscribers}</span> supporters
                          </div>
                          <Link href={`/creator/${creator.id}`}>
                            <AnimatedButton variant="outline" className="text-sm py-1">
                              View Creator
                            </AnimatedButton>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </InViewAnimation>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
