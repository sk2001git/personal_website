import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth; // turn to boolean by adding !!
  console.log("Route: ", req.nextUrl.pathname);
  console.log("Login Status: ", isLoggedIn);

  // req.auth
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],  // invoke middlewares based on routes except when matcher is true  
}