'use client';

import { useClerk } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';

export default function Button({ btnName = '', children }) {
  const { openSignIn, signOut } = useClerk();
  const router = useRouter();

  if (btnName === 'SignOut') {
    return (
      <button
        className='px-4 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-500'
        onClick={() => signOut(() => router.push('/', { replace: true }))}>
        {children}
      </button>
    );
  }

  if (btnName === 'SignIn') {
    return (
      <button
        className='px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500'
        onClick={() => openSignIn({})}>
        {children}
      </button>
    );
  }
}
