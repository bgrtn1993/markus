const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    prefix: '',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: true, // or 'media' or 'class'
    theme: {
        extend: {
            borderColor: (theme) => ({
                ...theme('colors'),
                DEFAULT: theme('colors.aux.gray.dark'),
            }),
            spacing: {
                7.5: '1.875rem',
            },
            margin: {
                '5px': '0.357rem',
            },
            maxHeight: {
                100: '25rem',
                130: '32.5rem',
                158: '39.5rem',
            },
            fontSize: {
                xxs: ['0.688rem', '0.875rem'],
            },
            boxShadow: {
                inner: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: colors.black,
                white: colors.white,
                gray: colors.trueGray,
                mar: {
                    black: '#212332',
                    gray: {
                        light: '#F3F6F7',
                        lightest: '#7E7E7E',
                        dark: '#BACAD0',
                        'dark-100': '#4F6D79',
                        darkest: '#3D444B',
                    },
                    green: {
                        DEFAULT: '#437F7F',
                        secondary: '#1FD1D0',
                        dark: '#236262',
                        hover: '#153B3B',
                    },
                    red: {
                        dark: '#B2101D',
                        hover: '#7F0B15',
                    },
                    blue: {
                        'light-50': '#E9F6FF',
                        light: '#009ADA',
                        'light-200': '#138EE7',
                        DEFAULT: '#095B95',
                        dark: '#094673',
                        hover: '#063B61',
                    },
                    link: 'rgb(51,102,204)',
                    warn: '#E3B506',
                    error: '#D73C37',
                },
            },
        },
        fontFamily: {
            nib: ['Nib Pro', ...defaultTheme.fontFamily.sans],
            condensed: ['config_condensedmedium', ...defaultTheme.fontFamily.sans],
            inter: ['Inter', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [],
}