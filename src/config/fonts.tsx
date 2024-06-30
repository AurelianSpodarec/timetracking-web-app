import { Cabin_Sketch, Neucha } from 'next/font/google'

export const cabinSketch = Cabin_Sketch({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabin-sketch'
})

export const neucha = Neucha({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-neucha'
})
