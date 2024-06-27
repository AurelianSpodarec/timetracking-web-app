// ============================================================
// API Auth
// ============================================================

import FetchZiti from '../fetch/FetchClocklance'

export interface IAuthLogin {
  email: string
  password: string
}

// Login
// ===========================================

export async function authLogin (data: IAuthLogin) {
  return await FetchZiti('login', 'POST', data)
}
