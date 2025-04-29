import CreatorProfile from '@/components/creator/CreatorProfile';

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function CreatorPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Simulate fetching creator data
  const creator = {
    id: params.id,
    name: "Jane Creator",
    handle: "@janecreator",
    bio: "Digital artist and storyteller. Creating worlds through pixels and imagination.",
    avatarUrl: "/avatar.jpg",
    coverUrl: "/cover.jpg",
    stats: {
      followers: 12500,
      posts: 156,
      joined: "2024"
    }
  };

  // Simulate fetching tiers data
  const tiers = [
    {
      name: "Fan",
      price: 5,
      benefits: [
        "Access to exclusive posts",
        "Behind-the-scenes content",
        "Early access to new art"
      ]
    },
    {
      name: "Supporter",
      price: 10,
      benefits: [
        "All Fan benefits",
        "Monthly digital wallpapers",
        "Vote on future projects"
      ]
    },
    {
      name: "Patron",
      price: 25,
      benefits: [
        "All Supporter benefits",
        "Custom digital artwork",
        "Monthly live drawing sessions"
      ]
    }
  ];

  // Simulate fetching posts data
  const posts = [
    {
      id: "1",
      title: "New Digital Art Series",
      excerpt: "Excited to share my latest digital art series exploring themes of nature and technology.",
      date: "2025-04-15",
      likes: 234,
      comments: 45
    },
    {
      id: "2",
      title: "Behind the Scenes",
      excerpt: "Take a look at my creative process and the tools I use to bring my art to life.",
      date: "2025-04-10",
      likes: 189,
      comments: 32
    },
    {
      id: "3",
      title: "Monthly Wallpaper Pack",
      excerpt: "This month's exclusive wallpaper pack is now available for Supporter tier and above!",
      date: "2025-04-05",
      likes: 312,
      comments: 67
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="h-64 bg-gray-300 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <CreatorProfile creator={creator} tiers={tiers} posts={posts} />
      </div>
    </div>
  );
}
