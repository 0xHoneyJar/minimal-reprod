import createIntlMiddleware from "next-intl/middleware";

export default createIntlMiddleware({
  locales: ["en"],
  defaultLocale: "en",
  localePrefix: "never",
});

export const config = {
  // Skip all non-content paths
  matcher: [
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    // '/(de|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
