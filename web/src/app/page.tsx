'use client';

import { useNhostClient, useUserData } from '@nhost/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react';

import { withNhost } from '@/lib/withNhost';

const NavigateComponent2: React.FC = () => {
  const router = useRouter();

  const nhost = useNhostClient();
  const user = useUserData();
  const handleNavigation = () => {
    router.push('/route2');
  };

  const handleCreateUser = async () => {
    try {
      const { user, error } = await nhost.auth.signUp({
        email: 'user@example.com',
        password: 'password123',
      });
      if (error) {
        console.error('Error creating user:', error);
      } else {
        console.log('User created:', user);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  const handleLoginUser = async () => {
    try {
      const { session, error } = await nhost.auth.signIn({
        email: 'user@example.com',
        password: 'password123',
      });
      if (error) {
        console.error('Error logging in:', error);
      } else {
        console.log('User logged in:', session);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  const handleLogoutUser = async () => {
    try {
      const { error } = await nhost.auth.signOut();
      if (error) {
        console.error('Error logging out:', error);
      } else {
        console.log('User logged out');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <div className='flex flex-col'>
      <h1>{user?.email}</h1>
      <button onClick={handleNavigation}>Go to Route 1</button>
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleLoginUser}>Login User</button>
      <button onClick={handleLogoutUser}>Logout User</button>
    </div>
  );
};

export default withNhost(NavigateComponent2);
