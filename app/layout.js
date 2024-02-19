import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import {
  dark,
  neobrutalism,
  shadesOfPurple,
  unstable_createTheme,
} from '@clerk/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Auth',
  description: 'Next.js 14 with Clerk Authentication and Authorization',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ClerkProvider
          appearance={{
            // baseTheme: dark,
            // baseTheme: [neobrutalism],
            // baseTheme: [shadesOfPurple],
            userButton: {
              layout: {},
              elements: {},
              variables: {},
              baseTheme: [shadesOfPurple],
            },
          }}>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
