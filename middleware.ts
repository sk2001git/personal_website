import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoute, publicRoutes } from './route';
import authConfig from "./auth.config";
import NextAuth from "next-auth";

// Idea of middleware is like allowing the invoking of functions based on routes. That is, if the route matches the middleware, then the middleware is invoked.
// This allows redirect to login page if not logged in, or redirect to profile page if logged in.

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // Redirect to login if not logged in
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname); 
  const isAuthRoute = authRoute.includes(nextUrl.pathname);

  if (isApiAuthRoute) { // Allow every auth route to be invoked
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl)); // nextUrl provides the absolute path, so localhost:3000
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl)); 
  }

  return null;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],  // invoke middlewares based on routes except when matcher is true  
}