// ============================================================
// API User
// ============================================================
import FetchZiti from "../fetch/FetchClocklance"

// User
// ============================================================
export async function getUserprofile (bearerToekn: string) {
  return await FetchZiti('users/profile', 'GET', undefined, undefined, bearerToekn)
}
