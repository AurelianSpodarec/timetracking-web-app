/**
 * An array of routes that are accessible to the public
 * These routes do notrequire authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
]

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const authRoutes = [
  "/login",
  "/register",
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect
 * @type {string[]}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard" // should be whatever the page the user is at
