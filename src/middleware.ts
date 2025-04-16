import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuthenticated = !!token;
  const isCreator = token?.role === 'creator';
  
  // Paths that require authentication
  const authRequiredPaths = [
    '/dashboard',
    '/account',
    '/post/create',
    '/post/edit',
    '/settings'
  ];
  
  // Paths that require creator role
  const creatorRequiredPaths = [
    '/dashboard',
    '/post/create',
    '/post/edit',
    '/earnings'
  ];
  
  const path = request.nextUrl.pathname;
  
  // Check if the path requires authentication
  const requiresAuth = authRequiredPaths.some(authPath => path.startsWith(authPath));
  
  // Check if the path requires creator role
  const requiresCreatorRole = creatorRequiredPaths.some(creatorPath => path.startsWith(creatorPath));
  
  if (requiresAuth && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  if (requiresCreatorRole && !isCreator) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/account/:path*',
    '/post/create',
    '/post/edit/:path*',
    '/settings/:path*',
    '/earnings/:path*'
  ],
};
