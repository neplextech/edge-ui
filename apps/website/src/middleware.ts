import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/components')) {
        return NextResponse.redirect(new URL('/docs/components/button', request.url));
    }
}

export const config = {
    matcher: ['/components']
};
