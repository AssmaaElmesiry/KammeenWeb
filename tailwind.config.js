/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            maxWidth: {
                'dropdownWidth': '300px',

            },
            colors: {
                'mainColor': "#2E2851",
                'secondColor': "#A698F9",
                'SectionBg': '#F5F5F5',
                'thirdColor': '#FFAE53'
            },
            zIndex: {
                '99': '99',
                '999': '999',
                '9999': '9999',
                '99999': '99999',
            },
            width: {
                'mainImg': '90%',
            },
            inset: {
                'topMainImg': '14px'
            },
            spacing: {
                'mFooterT': '95%'
            },
            gridTemplateColumns: {
                'footerGrid': 'repeat(auto-fill, minmax(260px,1fr))'
            }
        },
    },
    plugins: [],
}