import { NextRequest, NextResponse } from 'next/server';
import { checkAuthentication } from './checkAuthentication';
import { APP_ROUTES } from '@/utils/constants';

export function middleware(request: NextRequest) {
    const isAuthenticated = checkAuthentication();

    if (!isAuthenticated && request.nextUrl.pathname.startsWith(APP_ROUTES.DASHBOARD)) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}
