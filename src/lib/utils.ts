import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseCookies (cookiesString:any) {
  const cookiePairs = cookiesString.split('; ')
  const cookies = {}
  cookiePairs.forEach((cookiePair:any) => {
    const [key, value] = cookiePair.split('=')
    cookies[key] = value
  })

  return cookies
}
