import { cva } from 'class-variance-authority'

// Notes
// So, CVA is a bit shit...

// Making button variants in CSS is easy peasy... this doesn't let you gorup stuff by kind, or anything at all...
// Let's give this a proper try.

// Variants will contain the colors, in this case
// Solid will have the primary colors, for BOTH, background, AND border, however...
// Outline will have the background transparent, 

// Note: Template literals should beused for quotes, that is because otherwise you wont be able to break the class
const buttonVariants = cva(
  `rounded-button-border-radius`,
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
      },
      kind: {
        solid: '',
        outline: 'bg-transparent',
        glass: 'border-transparent backdrop-blur-sm bg-opacity-60',
      },
    },
    compoundVariants: [
      // ======================================
      // Primary
      // ======================================
      //  bg-button-primary-bg hover:bg-button-primary-bg-hover bg-button-primary-foreground hover:bg-button-primary-foreground-hover'
      {
        variant: 'primary',
        kind: 'solid',
        className: `bg-button-primary hover:bg-button-primary/50
                    border border-button-primary
                    `
      },
      {
        variant: 'primary',
        kind: 'outline',
        className: 'border border-button-primary'
      },
      // ======================================
      // Secondary
      // ======================================
      {
        variant: 'secondary',
        kind: 'solid',
        className: 'bg-button-secondary border border-button-secondary'
      },
      {
        variant: 'secondary',
        kind: 'outline',
        className: 'border border-button-secondary'
      },
      // ======================================
      // Glass
      // ======================================
      // White/black
      {
        variant: 'primary',
        kind: 'glass',
        className: 'bg-green-500'
      },
    ],
    defaultVariants: {
      // variant: 'monochrome',
      // size: 'medium'
    }
  }
)

export default buttonVariants
