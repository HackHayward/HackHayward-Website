/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                120: '59rem',
            },
            fontFamily: {
                nav: ['Kanit', 'sans-serif'],
                exo: ['Exo 2', 'sans-serif'],
            },
        },
    },
    plugins: [require('tailwindcss-animated'), require('daisyui')],
};
