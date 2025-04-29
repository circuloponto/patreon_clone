'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';

interface Creator {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  followers: number;
  monthlyPrice: number;
}

interface Category {
  id: string;
  name: string;
}

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories: Category[] = [
    { id: 'all', name: 'All Categories' },
    { id: 'art', name: 'Art & Illustration' },
    { id: 'music', name: 'Music & Audio' },
    { id: 'writing', name: 'Writing & Publishing' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'education', name: 'Education' },
    { id: 'tech', name: 'Technology' }
  ];

  const creators: Creator[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      category: 'Art & Illustration',
      description: 'Digital artist creating vibrant illustrations and character designs.',
      image: '/images/creator1.jpg',
      followers: 12500,
      monthlyPrice: 5
    },
    {
      id: '2',
      name: 'Mike Chen',
      category: 'Music & Audio',
      description: 'Music producer sharing original tracks and production tutorials.',
      image: '/images/creator2.jpg',
      followers: 8300,
      monthlyPrice: 10
    },
    {
      id: '3',
      name: 'Emily Parker',
      category: 'Writing & Publishing',
      description: 'Author sharing weekly short stories and writing tips.',
      image: '/images/creator3.jpg',
      followers: 5600,
      monthlyPrice: 3
    },
    {
      id: '4',
      name: 'Alex Thompson',
      category: 'Gaming',
      description: 'Game developer creating indie games and dev logs.',
      image: '/images/creator4.jpg',
      followers: 15200,
      monthlyPrice: 8
    },
    {
      id: '5',
      name: 'Dr. Lisa Brown',
      category: 'Education',
      description: 'Physics professor sharing educational content and tutorials.',
      image: '/images/creator5.jpg',
      followers: 9400,
      monthlyPrice: 15
    },
    {
      id: '6',
      name: 'David Kim',
      category: 'Technology',
      description: 'Software engineer teaching coding and web development.',
      image: '/images/creator6.jpg',
      followers: 11800,
      monthlyPrice: 12
    }
  ];

  const filteredCreators = creators.filter(creator => {
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || creator.category === categories.find(cat => cat.id === selectedCategory)?.name;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Explore Creators</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover amazing creators and support their work. From artists to educators,
                find the perfect creator to follow and support.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search creators..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black appearance-none bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCreators.map(creator => (
                <Link href={`/creator/${creator.id}`} key={creator.id}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={creator.image}
                        alt={creator.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{creator.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{creator.category}</p>
                      <p className="text-gray-600 mb-4">{creator.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          {creator.followers.toLocaleString()} followers
                        </div>
                        <div className="text-sm font-semibold">
                          From ${creator.monthlyPrice}/mo
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {filteredCreators.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No creators found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
