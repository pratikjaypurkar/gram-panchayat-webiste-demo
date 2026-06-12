import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "mr"],

  // Used when no locale matches
  defaultLocale: "mr",
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(mr|en)/:path*"],
};
