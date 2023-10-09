import { NextRequest, NextResponse } from "next/server"
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let defaultLocale = 'ru'
let locales = ['en', 'ru']
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) { 
  const acceptedLanguage = request.headers.get('accept-language') ?? undefined
  let headers = { 'accept-language': acceptedLanguage }
  let languages = new Negotiator({ headers }).languages()
   
  return match(languages, locales, defaultLocale)
}
 
export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    '/((?!api|assets|.*\\..*|_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}