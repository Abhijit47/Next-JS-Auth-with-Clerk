import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // Routes that can be access while signed out
  publicRoutes: [
    '/',
    '/about',
    '/contact-us',
    '/next.svg',
    '/sign-in',
    '/sign-up',
  ],

  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ['dashboard'],
  // enable extra level debugging
  // debug: true,
  // after sign out user should be redirect to home page
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  // matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
