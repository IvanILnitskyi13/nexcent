/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            // Neutral
            black: '#263238',
            'dark-grey': '#4D4D4D',
            grey: '#717171',
            'light-grey': '#89939E',
            'gray-blue': '#ABBED1',
            silver: '#F5F7FA',
            white: '#FFFFFF',

            // Color Brand
            primary: '#28CB8B',
            secondary: '#263238',
            info: '#2194f3',

            // Color Shade
            'shade-one': '#43A046',
            'shade-two': '#388E3B',
            'shade-three': '#237D31',
            'shade-four': '#1B5E1F',
            'shade-five': '#103E13',

            // Color Tint
            'tint-one': '#66BB69',
            'tint-two': '#81C784',
            'tint-three': '#A5D6A7',
            'tint-four': '#C8E6C9',
            'tint-five': '#E8F5E9',

            // Color Action
            warning: '#FBC02D',
            error: '#E53835',
            success: '#2E7D31',
        },
        extend: {},
    },
    plugins: [require('tailwindcss-font-inter')],
};
