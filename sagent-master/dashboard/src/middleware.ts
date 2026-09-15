import { NextRequest, NextResponse, NextFetchEvent } from 'next/server';

export default async function middleware(request: NextRequest, event: NextFetchEvent) {
  // If WorkOS is configured, use it. Otherwise pass through for ZEN Suite demo mode.
  if (process.env.WORKOS_API_KEY && process.env.WORKOS_CLIENT_ID) {
    try {
      const { authkitMiddleware } = await import('@workos-inc/authkit-nextjs');
      const authMiddleware = authkitMiddleware({
        middlewareAuth: {
          enabled: true,
          unauthenticatedPaths: [
            '/',
            '/inbox',
            '/auth/:path*',
          ],
        },
      });
      return authMiddleware(request, event);
    } catch {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

