// ============================================================
// API User
// ============================================================
import FetchClocklance from "../fetch/FetchClocklance"

// User
// ============================================================

export async function getUserprofile (bearerToekn: string) {
  return await FetchClocklance('users/profile', 'GET', undefined, undefined, bearerToekn)
}
