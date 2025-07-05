
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Jumper Studio brand colors
				jumper: {
					black: 'hsl(var(--jumper-black))',
					white: 'hsl(var(--jumper-white))',
					orange: 'hsl(var(--jumper-orange))',
					purple: 'hsl(var(--jumper-purple))',
					"50": "#fff5f2",
					"100": "#ffe8e0",
					"200": "#ffd4c7",
					"300": "#ffb8a0",
					"400": "#ff8e6b",
					"500": "#FA4721", // Primary orange
					"600": "#e53e19",
					"700": "#c13315",
					"800": "#a02d17",
					"900": "#832b19",
					"950": "#47130a",
				},
				purple: {
					"50": "#faf7ff",
					"100": "#f1ebff",
					"200": "#e5daff",
					"300": "#d0baff",
					"400": "#b591ff",
					"500": "#9967ff",
					"600": "#8143A7", // Brand purple
					"700": "#7c3aed",
					"800": "#6b21d4",
					"900": "#581c87",
					"950": "#3b0764",
				},
				// Dark theme grays
				gray: {
					"50": "#f9fafb",
					"100": "#f3f4f6", 
					"200": "#e5e7eb",
					"300": "#d1d5db",
					"400": "#9ca3af",
					"500": "#6b7280",
					"600": "#4b5563",
					"700": "#374151",
					"800": "#1f2937",
					"900": "#111827",
					"950": "#030712",
					"dark": "#181818", // Card background
					"medium": "#404040", // Borders
					"light": "#C7C7C7", // Muted text
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'subtle-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'subtle-float': 'subtle-float 10s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'jumper-gradient': 'linear-gradient(135deg, #FA4721 0%, #8143A7 100%)',
				'jumper-gradient-soft': 'linear-gradient(135deg, rgba(250, 71, 33, 0.1) 0%, rgba(129, 67, 167, 0.1) 100%)',
				'jumper-secondary': 'linear-gradient(135deg, #FA4721 0%, #181818 100%)',
				'jumper-accent': 'linear-gradient(135deg, #8143A7 0%, #181818 100%)',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'haffer': ['Haffer', 'Inter', 'system-ui', 'sans-serif'],
				'display': ['Haffer', 'Inter', 'system-ui', 'sans-serif'],
				'inter': ['Inter', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'elegant-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
