'use client';
import Link from 'next/link';
import { useUser, UserButton } from '@clerk/nextjs';
import Button from './Button';

export default function Navbar() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <header className='bg-indigo-500'>
      <nav className='flex justify-between items-center'>
        <div className='text-stone-800  p-4 font-bold text-xl'>Clerk-Auth</div>
        <ul className='flex items-center justify-between gap-x-4 mx-4'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact-us'>Contact Us</Link>
          </li>
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link href='/sign-in'>Sign in</Link>
          </li>
          <li>
            <Link href='/sign-up'>Sign up</Link>
          </li>
          <li>
            {!isLoaded ? (
              <p>Loading...</p>
            ) : (
              <>
                {isSignedIn ? (
                  <div className='flex items-center gap-x-2'>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800'>
                      <svg
                        className='-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400'
                        fill='currentColor'
                        viewBox='0 0 8 8'>
                        <circle cx={4} cy={4} r={3} />
                      </svg>
                      {user.firstName}
                    </span>
                    <UserButton afterSignOutUrl='/' />
                    <Button btnName='SignOut'>Sign out</Button>
                  </div>
                ) : (
                  <Button btnName='SignIn'>Sign in</Button>
                )}
              </>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
