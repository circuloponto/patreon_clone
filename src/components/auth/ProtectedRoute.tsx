'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: string;
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { data: session, status } = useSession();
  
  if (status === 'loading') {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
    </div>;
  }
  
  if (status === 'unauthenticated') {
    redirect('/login');
    return null;
  }
  
  if (requiredRole && session?.user?.role !== requiredRole) {
    redirect('/');
    return null;
  }
  
  return <>{children}</>;
}
