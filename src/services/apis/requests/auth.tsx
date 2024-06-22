// ============================================================
// API Auth
// ============================================================

import FetchZiti from '../fetch/FetchClocklance'

interface IAuthLogin {

}

// Login
// ===========================================

export async function authLogin (data: IAuthLogin) {
  return await FetchZiti('login', 'POST', data)
}
