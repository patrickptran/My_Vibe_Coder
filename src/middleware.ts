import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// never relied on middleware for authentication, it's just a nice user experience
// it's esay to re-direct the user by using middleware ==> it's not the line of defense

// what if the middleware break, what could happen ? NextJS have the middleware security issues just a few versions ago

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api(.*)",
  // "/api/inngest(.*)", // block un-authentication background job for working
  // "/api/trpc(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
