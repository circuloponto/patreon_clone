'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PageTransition from '@/components/animations/PageTransition';
import FadeIn from '@/components/animations/FadeIn';

export default function AccountPage() {
  const router = useRouter();
  
  // Redirect to settings page
  useEffect(() => {
    router.push('/settings');
  }, [router]);

  return (
    <PageTransition>
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <FadeIn>
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
