'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/animations/PageTransition";
import FadeIn from "@/components/animations/FadeIn";
import StaggeredList from "@/components/animations/StaggeredList";
import AnimatedButton from "@/components/animations/AnimatedButton";
import InViewAnimation from "@/components/animations/InViewAnimation";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="bg-black text-white">
          <div className="container mx-auto px-6 py-16 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <FadeIn direction="left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Creators You Love</h1>
                </FadeIn>
                <FadeIn direction="left" delay={0.1}>
                  <p className="text-xl mb-8">Join our platform where fans directly support creators through memberships, exclusive content, and community.</p>
                </FadeIn>
                <FadeIn direction="left" delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/explore" className="inline-block">
                      <AnimatedButton variant="secondary" className="font-semibold py-3 px-6 rounded-md text-center">
                        Explore Creators
                      </AnimatedButton>
                    </Link>
                    <Link href="/signup" className="inline-block">
                      <AnimatedButton variant="outline" className="border-white text-white hover:bg-gray-800 font-semibold py-3 px-6 rounded-md text-center">
                        Become a Creator
                      </AnimatedButton>
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <div className="md:w-1/2">
                <FadeIn direction="right" delay={0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image 
                      src="/images/hero.jpg" 
                      alt="Abstract colorful swirl on black background" 
                      width={600} 
                      height={400}
                      className="rounded-md shadow-xl"
                      priority
                    />
                  </motion.div>
                </FadeIn>
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <InViewAnimation>
              <h2 className="text-3xl font-bold text-center mb-12">Why Creators Choose Us</h2>
            </InViewAnimation>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Direct Support",
                  description: "Get paid directly by your fans with monthly subscriptions that provide a predictable income.",
                  icon: "💰"
                },
                {
                  title: "Creative Freedom",
                  description: "Create what you want, when you want, without worrying about algorithms or advertisers.",
                  icon: "🎨"
                },
                {
                  title: "Community Building",
                  description: "Build a community around your work with exclusive content and direct communication.",
                  icon: "👥"
                }
              ].map((feature, index) => (
                <InViewAnimation key={index} delay={0.1 * index}>
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                </InViewAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Creators */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <InViewAnimation>
              <h2 className="text-3xl font-bold text-center mb-4">Featured Creators</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Discover amazing creators who are building communities and sharing exclusive content with their supporters.</p>
            </InViewAnimation>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  category: "Digital Art",
                  image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
                  supporters: "5.2K"
                },
                {
                  name: "Maya Williams",
                  category: "Music Production",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
                  supporters: "12K"
                },
                {
                  name: "Sam Rodriguez",
                  category: "Game Development",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
                  supporters: "8.7K"
                }
              ].map((creator, index) => (
                <InViewAnimation key={index} delay={0.1 * index}>
                  <motion.div 
                    className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="h-48 relative">
                      <Image 
                        src={creator.image} 
                        alt={creator.name} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{creator.name}</h3>
                      <p className="text-gray-600 mb-3">{creator.category}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{creator.supporters} supporters</span>
                        <Link href={`/creator/${index + 1}`}>
                          <AnimatedButton variant="outline" className="text-sm py-1">
                            View Profile
                          </AnimatedButton>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </InViewAnimation>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/explore">
                <AnimatedButton variant="primary" className="inline-block">
                  Explore All Creators
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <InViewAnimation>
              <h2 className="text-3xl font-bold text-center mb-12">What Creators Say</h2>
            </InViewAnimation>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "This platform has completely changed how I create. I can now focus on quality content instead of chasing algorithms.",
                  author: "Jessica K.",
                  role: "Podcaster"
                },
                {
                  quote: "The direct connection with my supporters has been incredible. I've built a real community that values my work.",
                  author: "Michael T.",
                  role: "Writer"
                }
              ].map((testimonial, index) => (
                <InViewAnimation key={index} delay={0.1 * index}>
                  <motion.div 
                    className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </InViewAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <InViewAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Creative Journey?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of creators who are building sustainable careers through direct fan support.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup">
                  <AnimatedButton variant="secondary" className="font-semibold py-3 px-8 rounded-md">
                    Get Started
                  </AnimatedButton>
                </Link>
                <Link href="/pricing">
                  <AnimatedButton variant="outline" className="border-white text-white hover:bg-gray-800 font-semibold py-3 px-8 rounded-md">
                    See Pricing
                  </AnimatedButton>
                </Link>
              </div>
            </InViewAnimation>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
