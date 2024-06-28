'use server'

import { AuthError } from 'next-auth'
import { signIn, signOut } from '@/auth'

import { IAuthLogin } from '@/services/apis/endpoints/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export async function serverLogin (values:IAuthLogin) {
  const { email, password } = values

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" }
        default:
          return { error: "Something went wrong ;-(" }
      }
    }

    throw error
  }
}

export async function serverLogout() {
  await signOut()
}