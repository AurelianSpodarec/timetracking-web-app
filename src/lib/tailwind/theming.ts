import plugin from 'tailwindcss/plugin'

export const theming = plugin(
  function ({ addBase, theme }) {
    addBase({
      ':root': {


        // Border Radius
        '--border-sketchy-1': "555px 25px 25px 25px / 25px 25px 25px 555px",
        '--border-sketchy-2': "255px 25px 225px 25px / 25px 225px 25px 255px",
        '--border-sketchy-3': "55px 225px 15px 25px / 25px 25px 35px 355px",


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
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px'
        }
      },
      extend: {
        colors: {

          // Primitives
          // =================================================

          // Neutral
          // --------------------------------------

          // Feedback
          // --------------------------------------

          // Named Colors
          // =================================================
          primary: {
            DEFAULT: 'var(--primary)',
            50: 'var(--primary-50)',
            500: 'var(--primary)',
            foreground: 'var(--primary-foreground)'
          },

          foreground: {
            DEFAULT: 'var(--foreground-500)',
            250: 'var(--foreground-250)',
            500: 'var(--foreground-500)',
            750: 'var(--foreground-750)'
          },

          destructive: {
            DEFAULT: 'var(--destructive)',
            foreground: 'var(--destructive-foreground)'
          },
          muted: {
            DEFAULT: 'var(--muted)',
            foreground: 'var(--muted-foreground)'
          },
          accent: {
            DEFAULT: 'var(--accent)',
            foreground: 'var(--accent-foreground)'
          },

          // Other
          // =================================================
          border: 'var(--border)',
          input: 'var(--input)',
          ring: 'var(--ring)',
          background: 'var(--background)',

          // =============================================================
          // Section: Dashboard
          // ============================================================= 
          dashboard: {
            header: {
              background: 'var(--header-background)',
              foreground: 'var(--header-foreground)',
              "border-bottom": 'var(--header-border-bottom)',
            },
            sidebar: {
              background: 'var(--sidebar-background)',
              foreground: 'var(--sidebar-foreground)',

              // Links
              //---------------
              
              
              "link-foreground": "var(--sidebar-link-foreground)",
              "link-foreground-hover": "var(--sidebar-link-foreground-hover)",
              "link-foreground-active": "var(--sidebar-link-foreground-active)",
              "link-foreground-active-hover": "var(--sidebar-link-foreground-active-hover)",
              "link-foreground-disabled": "var(--sidebar-link-foreground-disabled)",

              "link-background": "var(--sidebar-link-background)",
              "link-background-hover": "var(--sidebar-link-background-hover)",
              "link-background-active": "var(--sidebar-link-background-active)",
              "link-background-active-hover": "var(--sidebar-link-background-active-hover)",
              "link-background-disabled": "var(--sidebar-link-background-disabled)",
            },
          },

          // =============================================================
          // Components
          // ============================================================= 
          popover: {
            DEFAULT: 'var(--popover)',
            foreground: 'var(--popover-foreground)'
          },
          card: {
            DEFAULT: 'var(--card)',
            foreground: 'var(--card-foreground)'
          }
        },
        borderRadius: {
          "dashboard-sidebar-link-border-radius": "var(--border-sketchy-1)",
          "dashboard-sidebar-dropdown-menu": "var(--border-sketchy-1)"
        },
        // Animation
        // =================================================
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' }
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' }
          }
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out'
        }
      }
    }
  }
)
