// ============================================================
// API Auth
// ============================================================

import FetchClocklance from '../fetch/FetchClocklance'

export interface IAuthLogin {
  email: string
  password: string
}

// Login
// ===========================================

export async function authLogin (data: IAuthLogin) {
  return await FetchClocklance('login', 'POST', data)
}

export async function authRegister (data: IAuthLogin) {
  return await FetchClocklance('register', 'POST', data)
}

export async function authLogout () {
  return await FetchClocklance('logout', 'POST')
}
