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
        },
    },

    plugins: [require('tailwindcss-animated'), require('daisyui')],
};
