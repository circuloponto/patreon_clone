'use client';

import Image from 'next/image';
import { Heart, Share2, MessageCircle } from 'lucide-react';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import AnimatedButton from '@/components/animations/AnimatedButton';

interface PageProps {
  params: {
    id: string;
  };
}

export default function CreatorPage({ params }: PageProps) {
  const creator = {
    id: params.id,
    name: "Jane Creator",
    avatar: "/images/avatar.jpg",
    coverImage: "/images/cover.jpg",
    bio: "Digital artist and storyteller creating unique worlds through illustration and animation.",
    followers: 12500,
    posts: 156,
    engagement: "98%"
  };

  const tiers = [
    {
      name: "Fan",
      price: 5,
      benefits: [
        "Access to exclusive posts",
        "Behind-the-scenes content",
        "Early access to new artwork"
      ]
    },
    {
      name: "Supporter",
      price: 10,
      benefits: [
        "All Fan benefits",
        "Monthly digital wallpapers",
        "Vote on future projects",
        "Name in credits"
      ]
    },
    {
      name: "Patron",
      price: 25,
      benefits: [
        "All Supporter benefits",
        "Custom digital artwork",
        "1-on-1 monthly chat",
        "Early access to merch"
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        {/* Cover Image */}
        <div className="relative h-64 md:h-96">
          <Image
            src={creator.coverImage}
            alt={`${creator.name}&apos;s cover`}
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 -mt-20">
          <FadeIn>
            {/* Creator Profile */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative w-32 h-32">
                  <Image
                    src={creator.avatar}
                    alt={creator.name}
                    fill
                    className="rounded-full object-cover border-4 border-white"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">{creator.name}</h1>
                  <p className="text-gray-600 mb-4">{creator.bio}</p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4">
                    <div>
                      <span className="font-semibold">{creator.followers.toLocaleString()}</span>
                      <span className="text-gray-600 ml-1">Followers</span>
                    </div>
                    <div>
                      <span className="font-semibold">{creator.posts}</span>
                      <span className="text-gray-600 ml-1">Posts</span>
                    </div>
                    <div>
                      <span className="font-semibold">{creator.engagement}</span>
                      <span className="text-gray-600 ml-1">Engagement</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <AnimatedButton variant="primary">
                      Follow
                    </AnimatedButton>
                    <AnimatedButton variant="outline">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Message
                    </AnimatedButton>
                    <AnimatedButton variant="outline">
                      <Share2 className="w-5 h-5 mr-2" />
                      Share
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4">{tier.name}</h3>
                  <div className="text-3xl font-bold mb-6">
                    ${tier.price}
                    <span className="text-lg font-normal text-gray-600">/mo</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-600">
                        <Heart className="w-5 h-5 text-pink-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <AnimatedButton variant="primary" fullWidth>
                    Join {tier.name} Tier
                  </AnimatedButton>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
