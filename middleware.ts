import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define the protected routes
const protectedRoutes = ['/dashboard', '/protected-route'];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken');

  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    // If the user is not authenticated and trying to access protected routes, redirect to login
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next(); // Continue to the requested page if authenticated
}
