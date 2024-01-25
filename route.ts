/**
 * An array of routes that are public.
 * These routes will not be checked for authentication.
 * @type {string[]}
 */

export const publicRoutes = [
  "/"
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to the profile page
 * @type {string[]}
 */
export const authRoute = [
  "/auth/login",
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix ="/api/auth" // Blocking this means user cannot login or logout

/**
 * 
 */
export const DEFAULT_LOGIN_REDIRECT = "/profile"