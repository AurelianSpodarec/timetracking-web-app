import type { Config } from 'tailwindcss'

import { theming } from './theming'
import animatePlugin from 'tailwindcss-animate'

export const preset = {
  darkMode: ['class'],
  content: [],
  plugins: [theming, animatePlugin]
} satisfies Config
