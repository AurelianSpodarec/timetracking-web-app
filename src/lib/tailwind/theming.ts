import plugin from 'tailwindcss/plugin'
import themeConfig from './themeConfig'

export const theming = plugin(
  function ({ addBase, theme }) {
    addBase({
      ':root': {

        // =============================================================
        // Border Radius
        // =============================================================
        '--border-sketchy-1': "555px 25px 25px 25px / 25px 25px 25px 555px",
        '--border-sketchy-2': "255px 25px 225px 25px / 25px 225px 25px 255px",
        '--border-sketchy-3': "55px 225px 15px 25px / 25px 25px 35px 355px",

        // =============================================================
        // COMPONENTS
        // =============================================================
        
        // =============================================================
        // Component: Button
        // =============================================================
        '--button-primary': "blue",
        '--button-secondary': "red",
        '--button-border-radius': "var(--border-sketchy-1)",

        // PRIMARY
        // ===================================================

        // Solid
        // --------------------------------------------
        '--button-primary-solid-hover': "",
        '--button-primary-solid-border': "",

        // Outline
        // --------------------------------------------
        '--button-primary-outline-hover': "",
        '--button-primary-outline-border': "",

        // Secondary
        // ===================================================

        // Solid
        // --------------------------------------------

        // Outline
        // --------------------------------------------
        



        // =============================================================
        // Named Colors
        // =============================================================
        '--primary': '240 4.8% 95.9%',
        '--primary-50': theme('colors.gulfStream.100'),
        '--primary-250': theme('colors.gulfStream.150'),
        '--primary-500': theme('colors.gulfStream.450'),

        '--foreground-250': theme('colors.blackBlue.250'),
        '--foreground-500': theme('colors.blackBlue.400'),
        '--foreground-750': theme('colors.blackBlue.600'),

        '--background': theme('colors.white'),
        '--primary-foreground': '0 0% 98%',

        '--secondary': '240 4.8% 95.9%',
        '--secondary-foreground': '240 5.9% 10%',

        '--foreground': '240 10% 3.9%',

        '--accent': '240 4.8% 95.9%',
        '--accent-foreground': '240 5.9% 10%',

        '--muted': '240 4.8% 95.9%',
        '--muted-foreground': '240 3.8% 46.1%',

        // =============================================================
        // Other
        // =============================================================
        '--border': '240 5.9% 90%',
        '--input': '240 5.9% 90%',
        '--ring': '240 5% 64.9%',
        '--radius': '0.5rem',

        // =============================================================
        // Dashboard Components
        // ============================================================= 

        // Header
        // -------------------------------------------------------------
        "--header-background": "#333",
        "--header-foreground": "black",
        "--header-border-bottom": "green",

        // Sidebar
        // -------------------------------------------------------------
        "--sidebar-background": "#333",
        "--sidebar-foreground": "",

        "--sidebar-link-foreground": "#fff",
        "--sidebar-link-foreground-hover": "",
        "--sidebar-link-foreground-active": "#fff",
        "--sidebar-link-foreground-active-hover": "#fff",
        "--sidebar-link-foreground-disabled": "",

        "--sidebar-link-background": "",
        "--sidebar-link-background-hover": "#f4f4f5",
        "--sidebar-link-background-active": "#18181b",
        "--sidebar-link-background-active-hover": "#2f2f31",
        "--sidebar-link-background-disabled": "",

        // Main
        // ------------------------------------------------------------
      },
      '.dark': {
        // =============================================================
        // Mains Components
        // ============================================================= 

        // Header
        // -------------------------------------------------------------
        "--header-background": "black",
        "--header-foreground": "white",
        "--header-border-bottom": "red",

        // Sidebar
        // -------------------------------------------------------------
        "--sidebar-background": "#09090b",
        "--sidebar-foreground": "",

        "--sidebar-link-foreground": "#fff",
        "--sidebar-link-foreground-hover": "",
        "--sidebar-link-foreground-active": "",
        "--sidebar-link-foreground-active-hover": "",
        "--sidebar-link-foreground-disabled": "",

        "--sidebar-link-background": "",
        "--sidebar-link-background-hover": "#27272a",
        "--sidebar-link-background-active": "#27272a",
        "--sidebar-link-background-active-hover": "#27272a",
        "--sidebar-link-background-disabled": "",
      }
    })
    addBase({
      '*': {
        '@apply border-border': {}
      },
      body: {
        '@apply bg-background text-foreground': {}
      }
    })
  },
  {
    theme: {
      ...themeConfig.theme
    }
  }
)
