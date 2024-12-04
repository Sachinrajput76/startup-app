'use client'; // Use client-side rendering

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DashboardPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const sessionToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('sessionToken='))
      ?.split('=')[1];

    if (!sessionToken) {
      router.push('/register');
    }
  }, [router]);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
