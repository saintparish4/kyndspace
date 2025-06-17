import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  console.log('Middleware executing for path:', request.nextUrl.pathname);
  
  const { pathname } = request.nextUrl;
  const session = await getSessionCookie(request);
  
  console.log('Session status:', session ? 'Found' : 'Not found');

  // Check for protected routes
  if (pathname.startsWith("/api/journal/") || 
      pathname.startsWith("/journal/") || 
      pathname.startsWith("/dashboard/")) {
    console.log('Protected route detected:', pathname);
    
    if (!session) {
      console.log('No session found, redirecting to home');
      const homeUrl = new URL("/", request.url);
      homeUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(homeUrl);
    }
  }

  console.log('Middleware completed, proceeding to route');
  return NextResponse.next();
}

// Ensure middleware runs on all matching routes
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/journal/:path*',
    '/journal/:path*',
    '/api/dashboard/:path*'
  ]
}; 