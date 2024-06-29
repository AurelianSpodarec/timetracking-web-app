const themeConfig = {
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

        // BUTTON
        // --------------------------------------------------------
        button: {
          primary: "var(--button-primary)",
          secondary: "var(--button-secondary)",
        },
        
        
        // Other
        // --------------------------------------------------------
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
        "button-border-radius": "var(--button-border-radius)",
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
};

export default themeConfig;
