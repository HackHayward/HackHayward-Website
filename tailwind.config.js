/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                grotesk: "'Space Grotesk','sans-serif'",
                exo2: "'Exo 2','sans-serif'",
                mono: "'Space Mono', 'monospace'",
                robo: " 'Roboto', 'sans-serif'",
            },
            keyframes: {
                shine: {
                    '0%': { 'background-position': '100%' },
                    '100%': { 'background-position': '-100%' },
                },
            },
            animation: {
                shine: 'shine 5s linear infinite',
            },
        },
    },

    plugins: [require('tailwindcss-animated'), require('daisyui')],
};
