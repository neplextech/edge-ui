import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/docs')) {
        return NextResponse.redirect(new URL('/docs/introduction', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/components')) {
        return NextResponse.redirect(new URL('/components/accordion', request.url));
    }
}

export const config = {
    matcher: ['/docs', '/components']
};
