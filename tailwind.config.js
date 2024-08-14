/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                120: '59rem',
            },
            fontFamily: {
                grotesk: ['Space_Grotesk'],
            },
        },
    },
    plugins: [require('tailwindcss-animated'), require('daisyui')],
};
