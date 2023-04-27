import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/documentation')) {
        return NextResponse.redirect(new URL('/documentation/introduction', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/components')) {
        return NextResponse.redirect(new URL('/components/accordion', request.url));
    }
}

export const config = {
    matcher: ['/documentation', '/components']
};
