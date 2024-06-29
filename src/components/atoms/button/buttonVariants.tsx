import { cva } from 'class-variance-authority'

/**
* @description CVA provides limited grouping functionality. Please adhere to the specified structure.
* @note Ensure the use of template literals for quoting to facilitate class line breaking for proper organization.
* 
*  The first line of CVA globally affects all the buttons
*/

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
        className: `border border-button-primary`
      },
      // ======================================
      // Secondary
      // ======================================
      {
        variant: 'secondary',
        kind: 'solid',
        className: `bg-button-secondary 
                    border border-button-secondary
                    `
      },
      {
        variant: 'secondary',
        kind: 'outline',
        className: `border border-button-secondary`
      },
      // ======================================
      // Glass
      // ======================================
    ],
    defaultVariants: {
      variant: 'primary',
      kind: "solid",
    }
  }
)

export default buttonVariants
