import {
  authMiddleware,
  redirectToSignIn,
  redirectToSignUp,
} from '@clerk/nextjs';

import { NextResponse } from 'next/server';

export default authMiddleware({
  // Routes that can be access while signed out
  publicRoutes: [
    '/',
    '/about',
    '/contact-us',
    '/next.svg',
    // '/sign-in',
    // '/sign-up',
  ],

  // Routes that can always be accessed, and have
  // no authentication information
  // ignoredRoutes: ['/dashboard'],
  // Routes that require authentication
  // privateRoutes: ['/dashboard'],
  // enable extra level debugging
  // debug: true,

  afterAuth(auth, req, evt) {
    // console.log(auth, evt);
    // console.log(req.url); // http://localhost:3000/

    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // If the user is logged in and trying to access a protected route, allow them to access route
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }

    // Allow users visiting public routes to access them
    return NextResponse.next();
  },
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  // matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
