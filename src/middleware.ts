import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  let path = new URL(request.url).pathname
  if (path!=='/' && (!path.startsWith('/en') && !path.startsWith('/fr'))){
    console.log(path)
    const url = request.nextUrl.clone()
    url.pathname = '/error'
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],
 
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: '',
  localeDetection: false
});
 
export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)/']
};