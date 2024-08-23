/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	darkMode: 'class',
	theme: {
		extend: {
      maskImage: {
        'gradient-to-t': 'linear-gradient(black 80%, transparent)',
      },
			keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
        blackBlink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "black"
          }
        }
      },
      animation: {
        typing: "typing 3s steps(12) infinite alternate, blink .7s infinite",
        typingBlack: "typing 3s steps(12) infinite alternate, blackBlink .7s infinite",
      }
		},
	},
	plugins: [
		require('flowbite/plugin'),
    function ({ addUtilities }) {
      addUtilities({
        '.mask-gradient-to-t': {
          'mask-image': 'linear-gradient(black 80%, transparent)',
        },
      });
    }
	],
}
