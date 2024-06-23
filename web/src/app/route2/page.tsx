'use client';

import { useUserData } from '@nhost/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react';

import { withNhost } from '@/lib/withNhost';

const NavigateComponent2: React.FC = () => {
  const router = useRouter();

  const user = useUserData();
  const handleNavigation = () => {
    router.push('/');
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>{user?.email}</h1>
      <button onClick={handleNavigation}>Go to home</button>
    </div>
  );
};

export default withNhost(NavigateComponent2);
