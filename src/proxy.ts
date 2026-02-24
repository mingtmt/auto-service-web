import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["vi", "en"];
const defaultLocale = "vi";
const COOKIE_NAME = "NEXT_LOCALE"; 

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/studio") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const currentLocale = pathname.split("/")[1]; 
    
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, currentLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    
    return response;
  }

  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  
  const localeToUse = locales.includes(cookieLocale as string)
    ? cookieLocale
    : defaultLocale;

  request.nextUrl.pathname = `/${localeToUse}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}