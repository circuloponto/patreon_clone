import { NextRequest, NextResponse } from 'next/server';

// Mock database for posts
// In a real application, this would be stored in a database like MongoDB
let posts = [
  {
    id: '1',
    title: 'New Character Design: Forest Guardian',
    content: 'This is the full content of the post...',
    excerpt: 'Check out my latest character design for an upcoming fantasy series...',
    creatorId: '1',
    tierAccess: 0, // 0 means public
    publishStatus: 'published',
    publishDate: '2025-04-10',
    featuredImage: '/post-images/forest-guardian.jpg',
    views: 1245
  },
  {
    id: '2',
    title: 'Color Theory Workshop: Creating Mood with Color',
    content: 'This is the full content of the post...',
    excerpt: 'In this exclusive tutorial, I break down how I use color to create atmosphere...',
    creatorId: '1',
    tierAccess: 2, // Only accessible to tier 2 and above
    publishStatus: 'published',
    publishDate: '2025-04-05',
    featuredImage: '/post-images/color-workshop.jpg',
    views: 287
  }
];

// GET /api/posts - Get all posts (with optional filtering)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const creatorId = searchParams.get('creatorId');
  const tierAccess = searchParams.get('tierAccess');
  const publishStatus = searchParams.get('publishStatus');
  
  let filteredPosts = [...posts];
  
  // Apply filters if provided
  if (creatorId) {
    filteredPosts = filteredPosts.filter(post => post.creatorId === creatorId);
  }
  
  if (tierAccess) {
    const tierLevel = parseInt(tierAccess);
    filteredPosts = filteredPosts.filter(post => post.tierAccess <= tierLevel);
  }
  
  if (publishStatus) {
    filteredPosts = filteredPosts.filter(post => post.publishStatus === publishStatus);
  }
  
  return NextResponse.json({ posts: filteredPosts });
}

// POST /api/posts - Create a new post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.title || !body.content || !body.creatorId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create new post
    const newPost = {
      id: (posts.length + 1).toString(),
      title: body.title,
      content: body.content,
      excerpt: body.excerpt || body.content.substring(0, 150) + '...',
      creatorId: body.creatorId,
      tierAccess: body.tierAccess || 0,
      publishStatus: body.publishStatus || 'draft',
      publishDate: body.publishStatus === 'published' ? new Date().toISOString().split('T')[0] : null,
      featuredImage: body.featuredImage || null,
      views: 0
    };
    
    // Add to "database"
    posts.push(newPost);
    
    return NextResponse.json({ post: newPost }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
